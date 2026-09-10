### AudioEffect

The base class for audio effects that insert into an [AudioPlayer](/EngineAPI/Components/AudioPlayer)'s chain. Add a component that extends this (or one of the built ins below) to the same object as an AudioPlayer, and the player picks it up automatically in `awake()`, no wiring needed.

The built in effects that extend it are [AudioDelay](/EngineAPI/Components/AudioDelay) and [AudioReverb](/EngineAPI/Components/AudioReverb). This class is there so packages and plugins can ship their own effects.

### Methods

- `buildNodes(context): EffectNodes | null`: builds the effect's WebAudio nodes between an `input` and an `output`. Subclasses override this. The base returns `null`, which means the effect is skipped.

### Properties

- `player?: AudioPlayer`: the player this effect is attached to. Resolved on `awake()` from the same object or its ancestors.
