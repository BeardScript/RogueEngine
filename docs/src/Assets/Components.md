### Components

Components are scripts that you can add to objects in a scene. They make it dead easy to provide functionality and interaction to your project.

Just like all the code in your project, Components can be written in either TypeScript or JavaScript.

### Ready State

Rogue Components are Asynchronous by nature. For this reason they come equipped with a **ready state** feature which lets the engine know that all of the assets being referenced in its inspector interface are loaded.

A component will stay idle until it's **ready**.

You can tailor your approach by setting the loading configuration of your Assets in the [Asset Manager](/workflow/assetmanager) window.

### Creating Components

There are two ways to create a component. the first is to right click on the target folder and in the Assets menu select either **Component** for a TypeScript component or **Component JS** for a JavaScript component.

[TypeScript](https://www.typescriptlang.org/) is the officially supported language and the recommended option. If you can, please, use TypeScript ❤.

The second way to create a component is to select the target folder and select either **Component** or **Component JS** from the Asset options on the top menu.

In both cases you'll be prompted to provide a name for your component. When you accept your component will be created in the target folder.

### Editting Components

Editing components can be as simple as double clicking them or *right click -> open* the file. It will open in your favorite code editor but, this not the best solution.

**The recommended way** of doing this is to open your project folder in your code editor (VSCode, Sublime, etc.) first, and just then opening the component you wish to edit. This will open it in the context of the project.

opening a component can be as simple as double clicking it or *right click -> open* the file.

This method works perfectly with [VSCode](https://code.visualstudio.com/), which is the officially recommended editor.

If you don't open your project folder in your code editor first, the component file will open in isolation or in whatever current session you might have open. This is far from ideal.

### Adding Components

To add a component to an object you need to select it. The drag and drop your file on the **Add Component** drop zone in the inspector.

Alternatively, click the **Add Component** text in the drop zone and select a component from the list.

### Removing Components

To remove a component click the cog on the right and select the **Remove** option.

### Component Interface

The graphic interface of a component is defined within the component's class. You can visualize and modify variables through property controllers. These also allow you to reference objects within the scene, Prefabs, and other Assets.

### API

For more information on how components work, visit the [Component](/EngineAPI/component) class code reference.