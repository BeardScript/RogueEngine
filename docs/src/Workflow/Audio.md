### Audio

Rogue Engine ships a full audio stack, all built in. It covers everything from a simple one shot sound effect, to playlists, positional audio, effects and even whole audio zones that crossfade when you walk between rooms.

Everything is routed through the **Audio Mixer**, a global bus system, so you get consistent volumes and effects across the whole project without wiring anything by hand.

The audio components you'll use are:

- [AudioPlayer](/EngineAPI/Components/AudioPlayer): a non positional playlist and music player.
- [AudioPlayer3D](/EngineAPI/Components/AudioPlayer3D): positional audio that attenuates with distance.
- [AudioMixer](/EngineAPI/Components/AudioMixer): the global bus routing.
- [AudioEffect](/EngineAPI/Components/AudioEffect), [AudioDelay](/EngineAPI/Components/AudioDelay) and [AudioReverb](/EngineAPI/Components/AudioReverb): effects that you slot into a player's chain.
- [SoundEnvironment](/EngineAPI/Components/SoundEnvironment): audio zones that switch the whole soundscape.

### The Audio Mixer

The mixer sits at the top of the audio stack. It has a **master** output plus named buses for SFX, Music, Ambience, Voice, Dialogue, Stinger and UI, and it applies a global reverb and echo that any bus can send into.

You don't normally interact with it directly. Audio players pick a bus and the mixer takes care of the routing. If you do want to reach it, it's exposed as `RE.AudioMixer`, with handy bits like `setMasterVolume()`, `setBusSend()` and `setReverb()`.

### Audio Players

There are two kinds of player, and which one you pick depends on whether the sound has a position in the world.

#### AudioPlayer

Use an **AudioPlayer** for non positional audio: music, playlists, UI stingers, that kind of thing. Add the component to an object and drop a list of sounds on its **sounds** field. Yes, a list. A player can hold a whole playlist and shuffle through it with different playback modes.

You can choose between:

- **Single**: plays one sound and stops.
- **List**: plays through the list, one after the other.
- **Loop current sound**: keeps looping the selected track.
- **Loop list**: loops the whole playlist.

There's a **bus** dropdown so you can route the player to any of the mixer's buses, per track fades through the **fadeIn** and **fadeOut** fields, and a **transition** time to smoothly move between tracks.

You can drive it from code too. On the runtime side, `togglePlay()`, `play()`, `pause()`, `stop()`, `next()` and `previous()` cover the basics, and you can change `volume`, `pan`, `playbackRate` and `mode` on the fly.

#### AudioPlayer3D

Use an **AudioPlayer3D** when the sound lives in the world: a waterfall, an engine, a door. Add it to the object that emits the sound and give it a single **sound** file. It plays back spatialized, so it gets quieter and changes with distance and direction relative to the camera's listener.

You control how it attenuates with the standard positional audio fields: **distanceModel** (linear, inverse or exponential), **refDistance**, **rolloffFactor** and **maxDistance**. There are also cone settings if you want the sound to be directional, like a speaker or a shout.

The **mono** field is worth knowing about. When it's on, stereo sources get downmixed to mono, which makes positional audio behave much better. Keep it on unless you have a good reason not to.

### Effects

Effects insert into an audio player's chain on the same object. Add an **AudioDelay** or an **AudioReverb** to the same object as an AudioPlayer and the player picks it up automatically, no wiring needed. AudioEffect is the base class for those, so if you ever make your own effect (or use one from a package), that's what it extends.

- **AudioReverb** gives the sound space with a convolution reverb. Tweak the **decay** to set how long the tail rings out, plus a **wet**/dry mix.
- **AudioDelay** is a feedback delay, the classic echo. Set the **time**, how much **feedback** and the **wet**/dry mix.

Both respect the player's **fade** behavior, since they sit inside its chain.

### Sound Environments

A **SoundEnvironment** is an audio zone. Think of a cave, a street, a big hall. Add one to an object in that room and any AudioPlayer under the same object tree registers with it automatically.

Each environment carries its own reverb, echo and per bus sends, plus its own `masterVolume`. When you activate it, it crossfades the whole soundscape: the mixer values lerp to the environment's settings and the players under it fade in and out so you land on the right tracks. Only one environment is active at a time, so moving between zones is a smooth transition instead of an abrupt cut.

To activate one, just flip its **active** checkbox, or call `SoundEnvironment.switchTo(env)` from code. Give the activation some time with the **transition** field and it'll crossfade instead of snapping.

**A quick note on buses:** only the SFX, Ambience and Voice buses feed the environment's reverb. Music and the others stay dry, which keeps your music from getting muddy when you step into a reverb heavy room.

### A full example

Say you want a tavern with music, a crackling fire and some echo.

1. Add a **SoundEnvironment** to a room object. Set a bit of **reverbWet** and a **reverbDecay** to sell the big hall, and raise the **ambienceSend** a little.
2. Add an **AudioPlayer** under the same object for the background music. Set its **mode** to `Loop list`, drop a couple of tracks on **sounds** and route it to the **Music** bus.
3. Add another **AudioPlayer** for the fire crackling and route it to **Ambience**.
4. Add an **AudioPlayer3D** to the fire itself for the positional crackle, and one to each NPC that talks.
5. Drop an **AudioReverb** on the music player's object so the music gets a bit of the hall too, or leave it dry if you prefer.

When the player walks in, you need to activate the environment and everything crossfades in. If you have a second zone outside with its own settings, walking back out switches to it smoothly.
