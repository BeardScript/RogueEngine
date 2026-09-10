### OrbitCamera

Attaches three.js [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls) to a camera, fully customizable from the inspector. Add it to a Perspective Camera, or add the **Orbit Camera** object from the Add Object dialog (Alt/Opt + O), which comes with it already set up.

Every inspector property maps directly to the underlying controls. Angle props are stored in radians but shown in degrees in the inspector.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| target | object3d | | An optional object the camera orbits around. |
| autoRotate | checkbox | `false` | Auto rotate around the target. |
| autoRotateSpeed | number | `2` | Auto rotate speed. |
| enableDamping | checkbox | `false` | Smooth damping. |
| dampingFactor | number | `0.05` | Damping factor. |
| enablePan | checkbox | `true` | Allow panning. |
| enableRotate | checkbox | `true` | Allow rotating. |
| enableZoom | checkbox | `true` | Allow zooming. |
| unlimitedAzimuth | checkbox | `true` | Ignore the azimuth limits. |
| maxAzimuthAngle | number | `360` | Maximum azimuth in degrees. |
| minAzimuthAngle | number | `-360` | Minimum azimuth in degrees. |
| maxPolarAngle | number | `180` | Maximum polar angle in degrees. |
| minPolarAngle | number | `0` | Minimum polar angle in degrees. |
| unlimitedDistance | checkbox | `true` | Ignore the distance limits. |
| maxDistance | number | `100` | Maximum orbit distance. |
| minDistance | number | `0` | Minimum orbit distance. |
| unlimitedZoom | checkbox | `true` | Ignore the zoom limits. |
| maxZoom | number | `100` | Maximum zoom. |
| minZoom | number | `0` | Minimum zoom. |
| panSpeed | number | `1` | Pan speed. |
| rotateSpeed | number | `1` | Rotate speed. |
| zoomSpeed | number | `1` | Zoom speed. |
| keyPanSpeed | number | `7` | Keyboard pan speed. |
| screenSpacePanning | checkbox | `true` | Pan in screen space instead of camera space. |

### Properties

- `controls: OrbitControls`: the underlying OrbitControls instance, created on start.
