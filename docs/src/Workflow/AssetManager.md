### Asset Manager

The Asset Manager is in charge of loading and keeping track of the Assets being referenced by our components and their configuration.

The Asset Manager window is located at the right of the editor. You'll find the tab stacked with the **Skybox** and the **Inspector**.

### How does it work?

Each Scene has its own Asset Configurations and when you open a Scene in the editor the Asset Manager will set its own configurations.

At runtime, when a Scene is being loaded, it sends the Asset Manager its Asset Configurations. This will wipe out any remaining Assets that are not set to **keep loaded** and set the new configurations.

When that's done, the preloading process will begin and the scene will not finish loading until it's over.

### Asset Configurations

On the Asset Manager window, you'll find a list of all **Prefabs**, **Materials** and **AudioAssets** in your project. These are the only types of assets that we can reference in our components and thus the only ones to which we can apply a configuration.

You can set An Asset to **preload**, **keep loaded**, and/or **override**.

#### Preload

Setting an asset to **preload** tells the [Scene](/Assets/Scenes) that we want to fetch and load that asset before the Scene is initialized.

This is great for things that need to be readily available. Keep in mind that the more the assets you set to preload the longer it will take for your Scene to start.

#### Keep Loaded

This option tells the [Scene](/Assets/Scenes) that we want this Asset to stay loaded in the next Scene. This is a neat way to keep your loading time short when you know an Asset will be used in other scenes.

#### override

When this setting is set to true, the current configuration will be carried over all the following scenes, overriding any other configuration for the given Asset. This is very handy mostly when you wish to keep an asset loaded perpetually without the need to set its **keep loaded** property on every scene.

If an asset configuration for the incoming scene has an **override** this will take preference over an old one, thus, stopping its perpetuation.

### Saving Configurations

Asset Configurations are saved in the Scene so, whenever you make a change in the Asset Manager window, remember to save your scene.