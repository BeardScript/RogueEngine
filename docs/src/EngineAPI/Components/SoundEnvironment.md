### SoundEnvironment

An audio zone. Put one in a room, a cave, a street, and the [AudioPlayers](/EngineAPI/Components/AudioPlayer) under the same object tree register with it automatically. When the environment activates, it takes over the mix: the [AudioMixer](/EngineAPI/Components/AudioMixer) values lerp to its settings and its players crossfade in, so switching zones transitions smoothly instead of cutting.

Only one environment is active at a time. Activate one by checking its **active** prop, or from code with `SoundEnvironment.switchTo()`.

### Static

- `switchTo(environment, transition?)`: activates the given environment and deactivates the previous one.
- `active: SoundEnvironment`: the currently active environment.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| reverbDecay | number (0 to 10) | `2` | The reverb decay this environment applies to the mixer. |
| reverbWet | number (0 to 1) | `0.3` | How wet the reverb is in this zone. |
| echoTime | number (0 to 1) | `0.3` | The echo delay time in this zone. |
| echoFeedback | number (0 to 0.95) | `0.35` | The echo feedback in this zone. |
| echoWet | number (0 to 1) | `0` | How wet the echo is in this zone. |
| sfxSend | number (0 to 1) | `0.4` | How much of the SFX bus feeds the zone's reverb. |
| ambienceSend | number (0 to 1) | `0.4` | How much of the Ambience bus feeds the zone's reverb. |
| voiceSend | number (0 to 1) | `0.4` | How much of the Voice bus feeds the zone's reverb. |
| transition | number (0 to 10) | `1` | How long the crossfade takes when the environment activates. |
| masterVolume | number (0 to 1) | `1` | The master volume while this environment is active. |
| active | checkbox | | Whether this environment is the active one. |

### Methods

- `activate(transition?)`: activates this environment.
- `deactivate(transition?)`: deactivates it.
- `enable()` / `disable()`: activate or deactivate without a transition.
- `addPlayer(player)`: registers an AudioPlayer with the environment.
- `setReverb(decay, wet)` / `setBusSend(bus, amount)` / `setMasterVolume(value)`: runtime setters that drive the mixer.

**A note on buses:** only the SFX, Ambience and Voice buses feed the environment reverb. Music and the other buses stay dry, so music doesn't get muddy inside reverby zones.
