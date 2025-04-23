### Prefabs

Prefabs are pre-fabricated objects stored in **.roguePrefab** files that we can drop into our scene or set as a reference of a **Prefab** field in a [Component](/EngineAPI/Component).

### Creating Prefabs

To create a prefab grab an object in the **Hierarchy** window and drop it on the target folder. A **.roguePrefab** file with the same name of the given object will be created.

### Loading Prefabs

Loading a prefab is as simple as dragging a **.roguePrefab** file and dropping it on the **Scene** or **Hierarchy** window.

You can also instantiate your Prefabs from your components, through code. In order to do this, you first need to drop your **.roguePrefab** file into the **Prefab** field of a component's interface in the inspector.

### Loading Named Prefabs

Named Prefabs are all the prefab files located under `Assets/Prefabs/`. These can be dynamically loaded without the need to reference them in a component.

We can do this using [RE.Prefab.instantiate()](/EngineAPI/Prefab#static-instantiate), [RE.Prefab.fetch()](/EngineAPI/Prefab#static-fetch), [RE.Prefab.get()](/EngineAPI/Prefab#static-get).

### Editing Prefabs

To edit a prefab you can double click on the file or in the Asset Manager window (alt/option + A). This will open the file in the Prefab Editor. This is a dedicated scene where you can edit your prefab in isolation. After performing your changes, press `ctrl/cmd + S` or click on `Save And Exit` in the Hierarchy.

Another way to edit a prefab is to simply drop it in the scene, make changes and drop it back on any folder in the Project view. It'll always update the original prefab File.

### Duplicating Prefabs

To create a new prefab based on the current one, open it in the Prefab Editor or drop it in your current scene. Then, right-click -> Duplicate or `ctrl/cmd + D`. The duplicate object will be disattached from the original Prefab. Change the name of the object, then drag/drop it in the project view to get a new Prefab.

### Learn More

To learn how you can use Prefabs in your components see the documentation for the [Prefab](/EngineAPI/Prefab) class.