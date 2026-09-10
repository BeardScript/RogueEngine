### AudioMixer

The global audio routing. It holds a master output plus named buses and applies a shared reverb and echo that buses can send into. This is not a component you add to the scene, it's a static class, exported as `RE.AudioMixer`.

Most of the time you don't touch it directly. Players route through it automatically based on their **bus** prop. You reach it when you want to control the mix globally or at runtime.

The available buses are **SFX**, **Music**, **Ambience**, **Voice**, **Dialogue**, **Stinger** and **UI**.

### Properties

- `masterVolume` (get/set, default `1`): the master gain. Everything runs through it.
- `reverbWet` (get/set, default `0`): how much of the buses' sends reaches the shared reverb.
- `reverbDecay` (get/set, default `2`): the reverb decay in seconds. Rebuilds the reverb when set.
- `echoTime` (get/set, default `0.3`): the echo delay time in seconds.
- `echoFeedback` (get/set, default `0.35`): how much of the echo feeds back into itself.
- `echoWet` (get/set, default `0`): how much of the sends reaches the echo.

### Methods

- `setMasterVolume(value)`: sets the master volume.
- `setVolume(name, value)` / `getVolume(name)`: set or read a bus volume by name.
- `setBusSend(name, amount)` / `getBusSend(name)`: set or read how much of a bus goes to the reverb and echo (0 to 1).
- `setReverb(decay, wet)`: sets both reverb decay and wet level at once.
- `setEcho(time, feedback, wet)`: sets the echo settings at once.
- `route(node, bus = SFX)`: routes a node's gain to a bus. Players use this internally.
- `createImpulseResponse(context, seconds)`: builds a decaying noise impulse. The reverb effect uses this.

### A note on buses

Every bus gets its own send path into the shared reverb and echo, at zero by default. So you can decide, per bus, how wet you want it, without affecting the others.
