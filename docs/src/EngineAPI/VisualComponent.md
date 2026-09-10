### VisualComponent

Since Rogue Engine 1.0 you can now create components using a visual scripting system. The editor provides a visual interface where we can stack together, units of encapsuled functionality called `Bricks`, that we can create ourselves.

Enter, the `VisualComponent` class. An extension of the `Component` class that works both as a component and as a controller with some useful static methods and properties to help us define our own Bricks in a simple way.

Much of its interface is meant to be used internally interconnecting the Engine and the `Visual Component Editor`, so here we'll focus only on the relevant parts.

A note on types: the config types used below (`VisualComponentData`, `RogueBrick`, `RogueActionConfig`, `RogueBlockConfig`, `RogueEventConfig`, `RogueConditionConfig` and their friends) are all exported from `rogue-engine` through the `VCTypes` namespace, so you can use them when you define bricks in code. A couple of helper types you'll see in the signatures, like `RogueBrickParam` and `RogueBrickReturn`, are shown here for readability and aren't exported.

```ts
class VisualComponent extends Component {
  static getParamType(
    paramIndex: number,
    brick: RogueBrick,
    vc: typeof VisualComponent
  ): any;
  setBlockParam(
    brick: RogueBlockType | RogueEventType,
    param: string,
    value: any
  ): void;
}
```

## Properties

#### .data

```typescript
static data: VisualComponentData;

type VisualComponentData = {
  fields?: any[],
  awake?: RogueBrick[],
  start?: RogueBrick[],
  update?: RogueBrick[],
  methods?: Record<string, {
    type: "Function", 
    blockParams: (RogueValue | RogueActionType)[], 
    block: RogueBrick[], 
    return?: {type: valueTypes, valueType?: ValueType | string}
  }>,
};
```

This static property contains the full serialization of this component with all its fields, methods, and bricks.

#### .actions

```typescript
static actions: Record<string, BrickConfig>;

type RogueBrick = RogueActionType | RogueEventType | RogueBlockType | RogueConditionType;

```

This static property contains a map of all the bricks currently in our project, including the default ones, indexed by their names.

## Methods

#### .defineAction

```typescript
static defineAction(action: RogueActionConfig): void;

type RogueActionConfig = {
  type: "Action",
  name: string;
  description?: string,
  params?: RogueBrickParam[],
  returns?: RogueBrickReturn[],
  do: (args: {component: VisualComponent, brick: RogueActionType}, ...params: any[]) => any,
}
```

Defines an Action, which is the most basic type of Brick. In essence all Bricks are actions with different specializations. Ultimately, we use the Action bricks to encapsule synchronous, sequential functionality, just like a regular line of code. Avoid asynchronous and conditional functionality here.

One of the superpowers of Actions is their unique ability to return one or more values.

Returned values are defined as block parameters available as local variables. The user can easily rename them to better suit their implementation.

When returning multiple values, we need to return them in our `do()` function as an array in the same order as they are defined in the configuration.

Since an Action can return values, they can also be used as parameters. In that case, only the first return (index 0) is taken into account.

The following example is the definition of the internal `Input:GetAxes` block which returns both the x and y values of the input.

```ts
RE.VisualComponent.defineAction({
  type: "Action",
  name: "RE:Input:GetAxes",
  description: "Get the x and y axes of an Input Action.",
  params: [
    {type: "String", name: "action name", 
      options: () => Object.keys(Input.actionMap).filter(key => Input.actionMap[key].type === "Axes")
    }
  ],
  returns: [{type: "Number", name: "x"}, {type: "Number", name: "y"}],
  do(args, name: string) {
    const {x, y} = Input.getAxes(name);
    return [x, y];
  }
});

```


#### .defineBlock

```typescript
static defineBlock(action: RogueBlockConfig): void;

type RogueBlockConfig = {
  type: "Block",
  name: string;
  description?: string,
  params?: RogueBrickParam[],
  blockParams?: RogueBrickReturn[],
  do: (args: {component: VisualComponent, brick: RogueBlockType}, ...params: any[], block?: any[]) => any,
}
```

Defines a `Block` type of Brick. This is an action that performs a set of actions in a specific way with the possibility of providing local parameters. Just like actions, this is meant for synchronous, sequential actions, like iterations.

Here's the definition of the internal `Repeat` Block which is basically just a for loop.

```ts
RE.VisualComponent.defineBlock({
  type: "Block",
  name: "RE:Repeat",
  description: "Repeats a set of actions a given number of times",
  params: [
    { type: "Number", name: "times", value: 1 }
  ],
  blockParams: [
    {type: "Number", name: "index"}
  ],
  do(args, times: number, block?: any[]) {
    for (let i = 0; i < times; i++) {
      args.component.setBlockParam(args.brick, "index", i);
      block && args.component.callBlock(block);
    }
  }
});

```

As you can see, we use `args.component.setBlockParam()` to define our index blockParam and then we use `args.component.callBlock()` passing in the block array which is always provided to you as the last parameter.

#### .defineEvent

```typescript
static defineEvent(action: RogueEventConfig): void;

type RogueEventConfig = {
  type: "Event",
  name: string;
  description?: string,
  params?: RogueBrickParam[],
  blockParams?: RogueBrickReturn[],
  do: (args: {component: VisualComponent, brick: RogueEventType}, ...params: any[]) => any,
}
```

Defines an `Event` type of Brick. This is meant to execute a set of actions (a Block) that will trigger asynchronously, for example, a collision detection event, or an API call, that you could just define in the `Start` section.

This is indeed, just an asynchronous Block if you will.

Same as with the Block, you can define block parameters, accessible to the action the user adds inside.

Here we have an internal Brick `Prefab:InstantiateRandomFromPath` which instantiates a named prefab inside the Prefabs folder. So you could pass in `vehicles/cars/` to get a random car prefab in that folder. Since it's an asynchronous operation, an event is very well suited for this.

```ts
RE.VisualComponent.defineEvent({
  type: "Event",
  name: "RE:Prefab:InstantiateRandomFromPath",
  description: "Instantiates a prefab from a random prefix path in the Prefabs folder",
  blockParams: [{type: "Object3D", name: "instance"}],
  params: [
    { type: "String", name: "path" },
    { type: "Object3D", name: "parent", optional: true },
  ],
  async do(args, path: string, parent?: THREE.Object3D) {
    const prefabNames = Object.keys(Prefab.namedPrefabUUIDs);
    const foundNames = prefabNames.filter(name => name.includes(path));

    const selectedIndex = randomRange(0, foundNames.length, true);
    const selectedName = foundNames[selectedIndex];

    const instance = await Prefab.instantiate(selectedName);
    parent && parent.add(instance);
    args.component.setBlockParam(args.brick, "instance", instance);

    if (args.brick.block) {
      args.component.callBlock(args.brick.block);
    }
  }
});
```

Note that we use `args.component.setBlockParam()` to give the user access to the prefab instance within the block, after which we use `args.component.callBlock(args.brick.block)` to execute the bricks added by the user.

#### .defineCondition

```typescript
static defineCondition(action: RogueConditionConfig): void;

type RogueConditionConfig = {
  type: "Condition",
  name: string;
  description?: string,
  params?: RogueBrickParam[],
  do: (args: {component: VisualComponent, brick: RogueConditionType}, ...params: any[]) => any,
}
```

Just like the above but only has parameters and no returns. It is basically just meant for the IF. There's no real good reason to use this so just use an IF which is more powerful, as it has `else` and `else if` support. Don't bother with it.

#### .getParamType

```typescript
static getParamType(
  paramIndex: number,
  brick: RogueBrick,
  vc: typeof VisualComponent
): any;
```

Returns the type of a given parameter. This method is useful when you need to infer the type of a parameter or a return, based on the type of a specific parameter. Check out the inference examples in this document.

#### .setBlockParam

```typescript
setBlockParam(
    brick: RogueBlockType | RogueEventType,
    param: string,
    value: any
): void;
```

This is a member of the `VisualComponent` instance used in `Block` and `Event` Bricks to set the `blockParams` that a user will have available in their added actions. Check out the `Block` and `Event` definitions in this document.

#### .callBlock

```typescript
callBlock(block: RogueBrick[]): any;
```

This is a member of the `VisualComponent` instance used in `Block` and `Event` Bricks to execute the bricks added by the user inside our block. Check out the `Block` and `Event` definitions in this document.


## Naming Bricks

Brick names should concisely state exactly what they do and be categorized appropriately. 

The way we define the category is in the name itself `[category]:[name]`. The category will show in a smaller font in the editor and makes it easier to look for bricks in the search menu.

You'll notice that default internal component names all begin with `RE:` this is not shown in the Editor but you'll see it in the code. Don't use that prefix as it's meant to help you and the engine tell what's internal and what's contextual to the project.

## do()

This method is the most important part of the configuration. This is the actual code that gets executed.

Let's take a look at its parameters.

```ts
do: (
  args: {
    component: VisualComponent, 
    brick: RogueActionType | RogueBlockType | RogueEventType | RogueConditionType
  }, 
  ...params: any[]
) => any,
```

`args` is an object that contains the `VisualComponent` and `Brick` instances that its executing on.

After that, we'll receive all the parameters in the `params` member of the configuration in the same order in which they're defined.

In the case of `Action` Bricks we can return one or more values. Check out the Action Brick definition in this document to learn more.

## Type Inference

Sometimes, we don't know the type of a parameter or a return, because they depend on external factors like, for instance, the type of other parameters.

That's when we need to infer the type.

In order to do this we define the infer() method provided for `params`, `blockParams`, and `returns`. The method needs to return the type in the same format as we would manually define it in the configuration.

The infer() method provides both the current brick instance and the specific VisualComponent class (vc), so we have access to all its serialized data (fields, methods, etc).

Here we have the internal SetField action, where we infer the type of the second parameter (at index 1) based on the type of the field. For this, we take the value of the first parameter (name of the field) and we look for the field inside `vc.data.fields`.

```typescript
RE.VisualComponent.defineAction({
  type: "Action",
  name: "RE:SetField",
  description: "Sets the value of a field in this VisualComponent",
  params: [
    { type: "Field", name: "field" },
    { type: "Any", name: "value", infer: (brick, vc) => {
      const params = brick.params as VCTypes.RogueValue[];
      const field = vc.data.fields?.find(field => field.name === params[0].value);
      return {type: field?.type || "Any", valueType: field?.valueType};
    } }
  ],
  do(args, field: string, value: any) {
    args.component[field] = value;
  }
});
```

In the following example we do the same but in this case with a return. Additionally we're using `getParamType()` to determine the type of the first parameter (index 0).

```ts
RE.VisualComponent.defineAction({
  type: "Action",
  name: "RE:RandomPick",
  description: "Picks a random element from an array",
  returns: [{type: "Any", name: "picked", infer: (brick, vc) => {
    let paramType = vc.getParamType(0, brick, vc);

    return typeof paramType.valueType === "string" ? {type: paramType.valueType} : paramType.valueType;
  }}],
  params: [
    { type: "Array", name: "targets" },
  ],
  do(args, array: any[]) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
  }
});
```

Note how it returns a single value, as we only have one return.

## Param Options

If you have a predefined set of options that you want to show the user, you can define the options() method.

In the following example we use it to get all the tags defined in our scene in order to provide them as an option to the user. This makes it easy for them to choose from existing options instead of having to type the name which is more error prone.

```typescript
RE.VisualComponent.defineAction({
  type: "Action",
  name: "RE:hasTag",
  description: "Tells us whether an object has a tag or not.",
  params: [
    {type: "Object3D", name: "object"}, 
    {type: "String", name: "tagName", options: () => Tags.getTags() || []}
  ],
  returns: [{type: "Boolean", name: "hasTag"}],
  do(args, object: THREE.Object3D, tag: string) {
    return Tags.hasAll(object, tag);
  }
});

```

## Optional Parameter slots

Parameters required by default, unless you explicitly set them to be optional. This is really hard to do, you have to set the optional property to true. Brace yourselves for this terribly difficult bit of code. Don't say I didn't warn you.

```ts
VisualComponent.defineAction({
  type: "Action",
  name: "RE:Prefab:Instantiate",
  description: "Instantiate a prefab",
  returns: [{type: "Object3D", name: "instance"}],
  params: [
    { type: "Prefab", name: "prefab" },
    { type: "Object3D", name: "parent", optional: true },
  ],
  do(args, prefab: Prefab, parent?: THREE.Object3D) {
    const instance = prefab.instantiate(parent);
    return instance;
  }
});

```
As you can see, this is the internal `Prefab:Instantiate` brick. You can optionally set a parent, otherwise it'll just instantiate it as a child of the scene itself.

Now if your eyes are not too tired after reading all of this, go make some bricks and build a great wall of code.
