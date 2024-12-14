### Loading Assets

There are two types of Assets that you might want to load: Rogue Assets, and external Assets.

### Rogue Assets

These are [Scenes](/assets/Scenes), [Materials](/assets/Materials), [Audio Assets](/assets/AudioAssets), [Components](/assets/Components), and [Prefabs](/assets/Prefabs). To learn how to "load" any of these check their respective articles.

### External Assets

These can be Images, 3d models, audio files, etc. There are multiple ways you can use them depending on the type of file. Let's look at some of them.

#### Images

Images can be used by Materials and the Skybox. To load them, drop them on an Image field in the Inspector.

**Supported image formats: jpg, png.**

#### 3d Models

To load a 3D model you can drag the file and drop it either directly on the **Scene** window, the **Hierarchy** or a particular object in the **Hierarchy** if you wish to nest it.

**Supported 3d model formats: gltf, fbx, obj.**

**Note:** Please use **GLTF** whenever possible. This is the better supported format for WebGL.

#### Audio Files

Audio Files can be turned into [Audio Assets](/assets/AudioAssets) that you can use in your [Components](/assets/Components). Right click on your file and select the **Create Audio Asset** option from the context menu.

**Supported audio formats: wav, mp3, ogg, mkv.**

### Static Assets

Another way to load assets is to treat them as static files. To do this you just have to put them inside *ProjectFolder/Static*. This route will be available from your built project as well so, go nuts... but not too much eh! Remember the loading times and all that. Fetch them wisely.
