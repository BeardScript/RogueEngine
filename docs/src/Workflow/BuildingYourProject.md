### Building Your Project

In order to share your project with the world, you'll need to build it.

Rogue Engine generates a ready-to-deploy web build that you can serve through a web server.

### Instructions

To build your project go to *File -> Project Settings*. A dialog will pop up where you can set the name of your project, the scenes you wish to load and the **build** button.

Set a name for your project and drop the scene files in the **Scenes** list. The first Scene on the list will be your project's initial Scene.

When you're ready press **build** and wait until the build process is complete. When that happens, the folder with your built project will open automatically.

Your built project will be saved at the root of your project with the name **Build_[timestamp]**.

### Built project files

If you look into your built project you'll find an HTML file, the Data folder and the Assets folder.

#### Data folder

This folder has the name of your project with "_Data" at the end. It contains all the built assets and the bundled javascript.

#### Assets folder

If your project has any [static assets](workflow/staticassets) the Assets folder will have your **static** folder with all it's contents.

#### index.html

This is the file with the execution code for your project.

### Running a built project

If you open the **index.html** directly your project will not work bacause it needs to be served through a web server. This can be something like the Live Server extension of VSCode to run it locally or a proper online web server.

The smoothest and most stable browser to run Three.js projects at the moment is Microsoft Edge.

Keep in mind that Firefox has some performance issues with WebGL.