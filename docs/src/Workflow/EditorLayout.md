### Editor Layout

The Editor is divided in two main sections. At the top we have the Toolbar, and right below the Editor Windows section.

### The Toolbar

At the left of the toolbar you'll find the transform controls. These allow us set the type of control we wish to use to mutate the transform properties of an [Object3D](https://threejs.org/docs/#api/en/core/Object3D) present in the current [Scene](/assets/Scenes).

At the center of the toolbar you'll find the runtime controls. These are the play and pause button. When you press play, the Scene will start running and instead of the play button you'll see a stop one.

### Editor Windows

The editor windows provide useful visualization and controls for different aspects of the editing process.

Let's look at each of the default Editor Windows one by one:

#### Project Window

The Project Window contains a file manager where you have access to all of your assets. Feel free to organize them however you want.

#### Console Window

The Console Window is where you'll see any logs coming from the [Debug](/EngineAPI/Debug) class.

#### Hierarchy Window

The Hierarchy provides a Hierarchical representation of the object in the loaded Scene. It allows you to select and nest objects at will. By default it will be deactivated when playing your scenes but, you can change this by unchecking the **Diable on Play** box at the top.

#### Scene Window

The Scene Window is where you can see and visually edit your loaded Scene. When pressing play on the Toolbar all editing controls will be deactivated and you'll be able to interact as your user would.

#### Inspector Window

The Inspector shows us all the useful controls to monitor and modify the properties and components of objects in the scene.

#### Skybox Window

The Skybox Window lets set and modify our Scene's skybox.
You have two different modes to select: procedural and cubemap. If you feel this feature is hurting the performance of your app or, it's simply irrelevant, you can disable it by unchecking the **enabled** box.

#### Asset Manager Window

The Asset Manager lets us set our Asset's loading configurations for the current Scene. See the [Asset Manager](/Workflow/AssetManager) section for more info.