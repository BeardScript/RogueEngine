### Scenes

Scenes are the scenario where we display our assets and create our environments. In the case of games, they can be treated as independent levels or even portions of the same map. To give you an example, you could load a whole new scene every time a player goes through a door.

Scenes are stored in **.rogueScene** files that contain the serialization of the three.js [Scene](https://threejs.org/docs/#api/en/scenes/Scene) object, the components being used by the objects in the scene, the [Skybox](/workflow/EditorLayout#skybox-window), and the [asset configurations](/workflow/assetmanager/#asset-configurations).

### Default Scene

When opening the editor you'll see the default scene where you can start creating right away. Don't forget to [save it](#saving-a-scene)!

### Creating a Scene

To create a scene, go to the **Project window**, right-click on to the folder where you want your file to reside and select *Assets -> Scene*. You can also do this by first selecting the target folder and then selecting *Assets -> Scene* on the top menu.

### Saving a Scene

Don't forget to save your work. Go to *File -> Save Scene* often and keep your work safe. If the scene we're editing was opened from a file, that's where it'll be saved. If otherwise, the scene has no file, you'll be prompted to set a name and a new file with the given name will be created in the currently selected folder of the **Project Window**.