### HTMLMeshComponent

Renders an HTML DOM subtree as a real 3D mesh, using three.js's HTMLMesh, where the HTML is captured into a canvas texture. The mesh lives in the scene, so it's interactive in 3D and in WebXR. Nest UI objects under an object that carries this component and they render through it, pressable with a controller.

Note the exported name. The class is exported from `rogue-engine` as `HTMLMeshComponent`, not `HTMLMesh`.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| interactive | checkbox | `true` | Whether the mesh reacts to pointer and XR input. |
| offset | vector3 | `(0, 1, 0)` | The mesh offset from the object. |
| scale | vector2 | `(10, 10)` | The mesh scale on X and Y. |

### Properties

- `mesh: HTMLMesh`: the built HTMLMesh, when it exists.
- `htmlui`: the attached UI element, if any.
