### AudioPlayer3D

A positional audio player. It plays a single sound that's spatialized in the world, so it gets quieter and changes as you move away from it or rotate around it. Put it on the object that emits the sound.

It routes through the [AudioMixer](/EngineAPI/Components/AudioMixer) buses, same as a regular [AudioPlayer](/EngineAPI/Components/AudioPlayer).

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| sound | PositionalAudio | | The audio file to play. |
| volume | number (0 to 2) | `1` | The player volume. |
| playbackRate | number (0 to 2) | `1` | Playback speed. |
| loop | checkbox | `false` | Loop the sound. |
| autoplay | checkbox | `true` | Starts playing when the scene runs. |
| mono | checkbox | `true` | Downmix stereo sources to mono. Keeps positional audio behaving. |
| bus | select | `0` | Which mixer bus to route through. |
| distanceModel | select | `inverse` | `linear`, `inverse` or `exponential` attenuation. |
| refDistance | number | `1` | The distance at which the sound is at full volume. |
| rolloffFactor | number | `1` | How fast the sound fades with distance. |
| maxDistance | number | `10000` | The distance at which the sound stops attenuating. |
| coneInnerAngle | number (0 to 360) | `360` | The inner cone angle in degrees. |
| coneOuterAngle | number (0 to 360) | `360` | The outer cone angle in degrees. |
| coneOuterGain | number (0 to 1) | `0` | Volume outside the outer cone. |
| panningModel | select | `HRTF` | `equalpower` or `HRTF`. HRTF sounds more natural through headphones. |

### Methods

- `play()`: starts playback.
- `stop()`: stops playback.
- `pause()`: pauses playback.
- `togglePlay()`: play or pause. This is also the editor button.
- `setVolume(value)`: runtime volume setter.

### Properties

- `isPlaying: boolean`: whether the sound is currently playing.
