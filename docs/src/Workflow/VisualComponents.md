### Visual Components

Visual Components are Rogue Engine Components that can be composed visually in the VisualComponent Editor.

### Creating a Visual Component

To create a Visual Component, right click on a folder in your project and select `New Visual Component`.

### Editing a Visual Component

To edit a visual component, double click it within the editor and the VisualComponent Editor will open with the selected component tab. If you just created it, wait for the editor to finish bundling, you'll see the play button turn into a spinner and then switch back in a few seconds when it's ready.

Press `ctrl/cmd + P` to open the VisualComponent menu, where you can search and select one to edit.

When you make changes you'll see a floppy disk icon appear in the tab. Press the icon or use `ctrl/cmd + S` to save. If you close without saving, your changes will be lost.

To close a specific component editor simply click the `x` icon on the tab.

### Layout

When you open a blank component the only thing you'll see the bare-bones skeleton layout.

First you'll see the Fields section where you'll be able to define and configure the component's fields.

Then starts the method folders. These will execute their contents at sone specific times. These ara analogous to their equivalent component methods that you can find in the code.

Let's see them one by one:

- Awake: runs when the component is first enabled or fired up. No internal resources or assets are available at this point.
- Start: runs when the component is ready to run, right before the game-loop begins.
- Update: runs every frame, basically, this is the game loop itself.

At the bottom, there's a button called `Add Method` to well... add methods. More on Methods later in the document.

### Fields

Fields are there to help us store, manipulate and visualize data in our components. Everything from the speed of a vehicle, to the jump force of a character.

To add a field, simply click on the plus icon.

You should select a type of data and click on the name to rename it. Press enter to save it.

To delete a field, press the `x` icon to its right.

While selecting a type alone is enough most of the time, `Array` and `Component` types require an additional `valueType`. In the case of Arrays, this tells the engine what type of values does the array store. In the case of Components we can specify what type of component it is.

The search menu will provide you with the components available in your project so if you select a component type directly, it'll automatically set the type to Component and the valueType to the selected component type.

Most fields have two modes: `regular` and `inspect`. Component fields additionally, can be `require`.

`regular`: just a regular field
`inspect`: Show it in the inspector. It may also provide you with other configuration options for the visual interface depending on the component type. For example, setting both the min/max values in a Number type field will display a slider in the inspector.
`require`: it sets the field to a component of the same type, present in the same object. Additionally, you can set a specific component name to look for and/or whether we want to look for the component upwards in the hierarchy as well, to for example, get it from a parent.

#### Using Fields

You can set the value of a field in your component using the `SetField` Brick. Additionally, you can get or set the value of a field in another Visual Component using the `VC:GetField` and `VC:SetField` Bricks.

### Bricks

Bricks are encapsuled units of functionality that you can add to your component. Generally they're so simple in nature that you can safely ask the Rogue AI to create them an trust that the result will be very unlikely to fail. Ultimately, you own your solution by stacking your bricks in a way that makes sense for your project, regardless of who wrote the code behind them.

**Tip**
You can navigate through your components bricks either by scrolling or with the `up` and `down` arrows.

There are four types of Bricks.

- **Actions:** synchronous actions that you can trust to run sequentially, like moving objects, setting values, etc.
- **Blocks:** these are actions that provide parameters to a block of actions that run in a specific way. Two examples of these are `Repeat` and `Iterate`.
- **Events:** these are actions that provide parameters to a block of actions that will run at some point when certain conditions are met. This is used for collision detection and api calls, as an example.
- **Conditions:** this is a special type of brick used for the `IF` brick. It runs a block of actions synchronously when a condition is met. The `IF` also supports `else` and `else if` which you can easily add/remove by right clicking the brick itself.

### Slots

Bricks can provide a set of parameters, also known as Slots. These allow us to configure the behavior of a brick. For example, a brick might let us set which object we want to apply movement to. We can set a slot to take the value of a field, an action a variable, an expression, or a primitive value (numbers, strings, booleans).

Sometimes a slot will offer you specific values pre-set by the developer.

**Tip**
You can navigate through slots with the `left` and `right` arrows of the selected brick.

### Adding Bricks

There are three ways to add bricks:

- **Add Button:** when you open one of the method folders you'll find an `Add` button you can press to open the search menu.
- **Right Click:** right click on a brick and select `Add Before` or `Add After`.
- **Keyboard:** with a brick selected press `shift + A` to add after or `ctrl/cdm + shift + A` to add before.

A search menu will open where you'll be able to select a brick. You can search by its name or category. In the future we'll support search tags as well.

### Removing Bricks

To remove a brick you can:

- **Right Click:** right click on a brick and select `Remove`.
- **Keyboard:** with a brick selected press the `Delete` key.

### Setting Slots

To set a slot value you can left click, or if you're navigating with the keyboard, press `Enter` on the slot.

The search menu will open and you'll be offered only fields, actions, variables, expressions and primitive values that are compatible with the type of that slot.

### Expressions

These provide an easy way to express from the simplest to the most complex numeric or boolean expressions. You can easily identify them by their dashed border. You'll also get relevant operators and elements to use in your expressions, including parenthesis.

You can add elements to your expression in multiple ways:

- **Right Click:** right click on an element of the expression and select `Add Before` or `Add After`.
- **Keyboard:** with the expression selected press `space` to add after or `shift + space` to add before.

To remove an element right click and select `Remove` or when navigating with the keyboard press the `Delete` key.

### Variables

Every Action Brick that returns one or more values will present them to you as variables that you can use in compatible slots of other Bricks.

You can give these variables a friendly name by right-clicking on them and selecting `rename`.

You can also set a variable's value using the special Action brick `SetVar`.

Additionally, there's a super useful brick called `Var` which you'll find in the Brick search menu.

Behind the scene this is simply an Action Brick disguised as contextual data storage... a variable.

You can set any sort of value or expression in a `Var` and have the result stored with a friendly name, making it easier to read and manage your component's behavior.

### Methods

Methods are self-contained sets of Bricks that you can execute with the `RunMethod` Brick. Additionally you can run Methods in other Visual Components using the `VC:RunMethod` Brick.

When are they useful?

- Organizing logical chunks of functionality in your component.
- Chunks of functionality that needs to be used in multiple places.
- Chunks of functionality that can to be used by other components.

### Block Parameters

These are contextual variables provided to `Event` and `Block` Bricks as well as `Methods`.

In the case of `Event` and `Block` Bricks you'll find them at the top of the block. Same as with any variable, they are prefixed with the alphanumeric id of the action.

In the case of `Methods` they're the local parameters, so it's only relevant if you're creating it. In this case, they're prefixed with the name of the method instead of an id.
