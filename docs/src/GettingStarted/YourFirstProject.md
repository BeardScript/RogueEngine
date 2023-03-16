### Your First Project

The first thing you'll see when starting Rogue Engine is the start window, where you can create and open projects.

### Creating a project

To create a project, use the **name** field to give it a name and then select the path where it'll be created. The default path for your projects is *documents/RogueProjects*.

Your project will be created at *selected/path/ProjectName*, so you don't have to worry about creating a sub-directory with the project name.

When you're ready, click on **create**. This will create your project files and install the required node modules so **make sure you are connected to the internet before you do this**. Other than when creating a project, you can always use the editor offline.

When your project is created it will open in the editor. Now you can start [importing assets](/workflow/importingassets) and [creating Scenes](/Assets/scenes) and [components](/Assets/components).

Keep in mind that your changes to the default scene will be lost unless you save it!

### Opening a project

Next time you start Rogue Engine, you can open your project by clicking on the **Open Project** button.

A window will come up where you can navigate to the directory where your project is located. When you've found it, press open and your project will be right where you left it.

### Project files

If you navigate to the project folder you'll see that a few files and folders have been created. These are part of the [Node.js](https://nodejs.org/) environment of the project and you shouldn't mess with them unless you really know what you're doing.

If you do understand what these files are and what they are doing then, lucky you! You have access to npm, the typescript configuration, the webpack configuration among other things there so go nuts, just make sure you don't touch the build process and webpack's current configuration when you're adding stuff.

If you break anything just create a new project and compare the configurations to see where you messed up.

### The Assets folder

The Assets folder is where you should add your 3d models, images, etc. Rogue Engine knows nothing above that folder so make sure you keep your assets in there.

You're free to create as many sub-directories as you like and use the project structure that suits you best.

Follow me to the next article to explore what you can do next.