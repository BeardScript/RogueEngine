### Animations

Animations bring your models to life. A character model can carry several of them, an idle, a walk, a run, and in Rogue Engine those clips live in their own **.rogueAnimation** asset files that you assign and play with the [Animator](/EngineAPI/Components/Animator) component.

A **.rogueAnimation** file stores a single [AnimationClip](https://threejs.org/docs/#api/en/animation/AnimationClip): the keyframed curves of one animation, extracted from the model that owns it.

### Creating Animation Assets

To turn a model's animations into assets, right click the model file in the **Project** window and select **Get Animations**.

The engine loads the model, extracts every animation clip it finds and writes a **.rogueAnimation** file for each one, in the currently selected folder of the Project window, usually the folder where the model lives.

How they're named depends on how many clips the model has:

- A model with a single animation gets a file named after the model.
- A model with several animations gets one file per clip, named after each clip.

If you run it again on an updated model and a file with the same name already exists, the engine keeps its uuid, so the references you already set up keep pointing at the right clip.

### Playing Animations with the Animator

Once you have your animation assets, add an **Animator** component to the object that carries your animated model. The Animator plays the clips you give it and blends between them.

In the Animator's **clips** field, add an entry for each animation. Every entry has a key, the name you'll use to reference the clip, and the clip itself, where you drop the **.rogueAnimation** file or click it to pick it from the list of your animation assets.

Then you can play and mix them from code:

```typescript
import * as RE from 'rogue-engine';
...
const animator = RE.Animator.get(this.object3d);

animator.mix("Run"); // Crossfade to the Run clip.
animator.mix("Idle");
```

The Animator also has a play button in the inspector to preview the selected clip while you work. For everything it can do, see its [reference](/EngineAPI/Components/Animator).

### Animation Fields

Animations don't only go in the Animator. Any component can hold a reference to a clip with a `props.animation()` field, like the view model clips on a [Weapon](/EngineAPI/Components/Weapon). You set them the same way: drop the **.rogueAnimation** file on the field, or click it and pick the clip from the dialog.

### Learn More

- The [Animator](/EngineAPI/Components/Animator) component to play and blend clips.
- The [Models](/Assets/Models) page to see how models are handled as assets.
