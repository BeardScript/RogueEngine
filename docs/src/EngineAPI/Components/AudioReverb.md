### AudioReverb

A convolution reverb effect that gives audio a sense of space. Add it to the same object as an [AudioPlayer](/EngineAPI/Components/AudioPlayer) and it inserts itself into the player's chain automatically. It extends [AudioEffect](/EngineAPI/Components/AudioEffect).

The reverb impulse is generated procedurally, so you don't need any impulse response files.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| decay | number (0 to 10) | `2` | How long the reverb tail rings out, in seconds. |
| wet | number (0 to 1) | `0.5` | How much of the reverberated signal mixes in. |
| dry | number (0 to 1) | `1` | How much of the clean signal passes through. |
