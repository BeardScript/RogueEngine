### Materials

Materials are essential for making things look good. They are used by [Meshes](https://threejs.org/docs/#api/en/objects/Mesh) to provide texture and other graphic sugar.

When you select a Mesh in the **Hierarhy** or the **Scene** window you'll see its Material in the **inspector**. Said Material can either be unique to that mesh, or a reference to a Material Asset, stored in a **.rogueMaterial** file.

The **.rogueMaterial** file contains the serialization of a Three.js [Material](https://threejs.org/docs/#api/en/materials/Material) and it can be used by any number of meshes in the same project.

The Material will be loaded by the [AssetManager](/Workflow/AssetManager) and all Meshes using the same Material will have access to the same instance.

### Saving a Material

To save your material to a **.rogueMaterial** file, you'll need to give it a name and click on Save. Your file will be saved in the selected folder of the **Project** window.

### Creating a Material

To create a Material, right click on the target folder and select *Assets -> [TypeOfMaterial]*

Alternatively you can select the target folder and click on *Assets -> [TypeOfMaterial]* on the top menu.

### Setting a Material

To set a Material to a Mesh, simply drag the Material file and drop it on the Material field of that Mesh in the inspector. The old material will be removed and the new one will be set in its place.

### Everything changes

Remember that if you use the same Material on multiple objects, these will have access to the same instance. This means that when you make changes to one of them, it'll be reflected on all the others.