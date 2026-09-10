### AudioDelay

A feedback delay, the classic echo effect. Add it to the same object as an [AudioPlayer](/EngineAPI/Components/AudioPlayer) and it inserts itself into the player's chain automatically. It extends [AudioEffect](/EngineAPI/Components/AudioEffect).

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| time | number (0 to 2) | `0.3` | The delay time in seconds between repeats. |
| feedback | number (0 to 1) | `0.4` | How much of the delayed signal feeds back. Higher means more repeats. |
| wet | number (0 to 1) | `0.4` | How much of the delayed signal mixes in. |
| dry | number (0 to 1) | `1` | How much of the clean signal passes through. |
