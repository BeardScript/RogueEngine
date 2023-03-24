### Prefabs

Prefabs are pre-fabricated objects stored in **.roguePrefab** files that we can drop into our scene or set as a reference of a **Prefab** field in a [Component](/EngineAPI/Component).

### Creating Prefabs

To create a prefab grab an object in the **Hierarchy** window and drop it on the target folder. A **.roguePrefab** file with the same name of the given object will be created.

### Loading Prefabs

Loading a prefab is as simple as dragging a **.roguePrefab** file and dropping it on the **Scene** or **Hierarchy** window.

You can also instantiate your Prefabs from your components, through code. In order to do this, you first need to drop your **.roguePrefab** file into the **Prefab** field of a component's interface in the inspector.

### Saving Prefab changes

When you load a prefab it is no longer attached to the file. so if you make any changes to your prefab you just need to make sure to keep the same name. This will overwrite the old file with the new version.

### Learn More

To learn how you can use Prefabs in your components see the documentation for the [Prefab](/EngineAPI/Prefab) class.