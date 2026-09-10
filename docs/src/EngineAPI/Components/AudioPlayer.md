### AudioPlayer

A non positional playlist and music player. It holds a list of sounds, plays them through with different playback modes, and routes everything through the [AudioMixer](/EngineAPI/Components/AudioMixer) buses, with per track fades.

You can add effects to it by putting [AudioEffect](/EngineAPI/Components/AudioEffect) components on the same object, and if it sits under a [SoundEnvironment](/EngineAPI/Components/SoundEnvironment), the environment takes control of it when it activates.

For a positional sound, use [AudioPlayer3D](/EngineAPI/Components/AudioPlayer3D) instead.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| sounds | Audio list | `[]` | The playlist. Drop audio assets here. |
| volume | number (0 to 2) | `1` | The player volume. |
| pan | number (-1 to 1) | `0` | Stereo pan. Left to right. |
| playbackRate | number (0 to 2) | `1` | Playback speed. |
| fadeIn | number (0 to 10) | `0` | Fade in time in seconds when a track starts. |
| fadeOut | number (0 to 10) | `0` | Fade out time in seconds when a track stops. |
| transition | number (-10 to 10) | `0` | Transition time between tracks. Negative values overlap the outgoing track. |
| mode | select | `single` | `single`, `list`, `loopCurrent` or `loopList`. |
| autoplay | checkbox | `true` | Starts playing when the scene runs. |
| currentTrack | select | `0` | The index of the currently selected track. |
| bus | select | `0` | Which mixer bus to route the player through. |

### Methods

- `play(index = currentIndex, fadeIn = this.fadeIn)`: starts the track at the given index.
- `stop()`: stops playback.
- `pause()`: pauses playback.
- `next()` / `previous()`: move through the playlist.
- `togglePlay()`: play or stop the current track. This is also the editor button.
- `fadeOutNow(duration)` / `fadeInNow(duration)`: fade the current track out or in.
- `addEffect(effect)`: inserts an effect into the player's chain.
- `setVolume(value)` / `setPan(value)` / `setPlaybackRate(value)`: runtime setters for the matching props.
- `setMode(value)` / `setBus(name)`: change playback mode or reroute to another bus.

### Properties

- `isPlaying: boolean`: whether a track is currently playing.
- `effects: AudioEffect[]`: the effects currently in the player's chain.
- `environment?: SoundEnvironment`: the environment that controls this player, when inside one.
