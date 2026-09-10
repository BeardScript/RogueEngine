### Create a project

The first thing you'll see when starting Rogue Engine is the start window, where you can create and open projects.

To create a new one, open the **New Project** window from the start window or from the Rogue Engine menu with **File -> New Project**.

At the top of the window you get two tabs, **Templates** and **From Project**. Pick whichever suits you, then give the project a name and a path and click **Create Project**.

### Starting from a Template

The **Templates** tab lets you start from a project that's already set up instead of an empty one. The first tile is always **Blank Project**, an empty project with no extra packages. Below it you'll find:

- **Rapier Physics**: a blank project with Rapier Physics.
- **Vehicle Template**: a basic Rapier vehicle.
- **Third Person Template**: a Rapier kinematic third person controller example.
- **Rapier Aircraft** (premium): an aircraft starter kit powered by Rapier.
- **Rapier FPS** (premium): an FPS template powered by Rapier.

Templates come as packages, so your new project opens with everything it needs already installed. No hunting around the Marketplace before you can hit play.

Two things to keep in mind:

- Templates other than **Blank Project** require you to be signed in, since they're fetched from the cloud. If you're not signed in, the tile asks you to sign in first.
- Premium templates need an account or license that covers them. Locked tiles show a padlock until you sign in with the right account.

### Starting from an Existing Project

The **From Project** tab creates a new project based on one you already have. Pick a recent project from the list, or click **Browse for a project...** and point it at a folder.

This is handy when you want a copy to experiment on, fork, or hand to someone, without touching the original project. You also get here directly when you use **Duplicate** on a project.

### Finishing up

Now give your project a **name** and choose where to put it. The name can contain letters, numbers, dashes and underscores. The default path is `documents/RogueProjects`.

Your project will be created at `selected/path/ProjectName`, so you don't have to worry about creating a sub-directory with the project name.

If there's already a project with that name in the location you picked, the window will tell you, so just change one of the two.

When you're ready, click **Create Project**. This will create your project files and install the required node modules, so **make sure you are connected to the internet before you do this**.

When your project is created it will open in the editor. Now you can start [importing assets](/Workflow/ImportingAssets) and [creating Scenes](/assets/Scenes) and [components](/assets/Components).

Keep in mind that your changes to the default scene will be lost unless you save them!

### Save Your Scene

Save your scene with `ctrl/cmd + S` or select Save Scene in the Rogue Engine Menu. You'll be prompted to provide a name. This will create a Scene file in your currently selected folder.

### Creating a Scene

Select New Scene from the Rogue Engine menu. This will create a fresh scene for you. You can also create a new Scene file from Assets -> Scene.

### Opening a project

Next time you start Rogue Engine, you will find the projects previously opened/created, on a list where you can open them with just a click.

You can also open your project by clicking on the **Open Project** button.

A window will come up where you can navigate to the directory where your project is located. When you've found it, press open and your project will be right where you left it.

It if's a recent project, you can go to the Rogue Engine top menu, select Recent and you'll get a list of the last few projects.

### Project files

If you navigate to the project folder you'll see that a few files and folders have been created. These are part of the [Node.js](https://nodejs.org/) environment of the project and you shouldn't mess with them unless you really know what you're doing.

If you do understand what these files are and what they are doing then, lucky you! You have access to npm, the typescript configuration, the webpack configuration among other things there so go nuts, just make sure you don't touch the build process and webpack's current configuration when you're adding stuff.

If you break anything just create a new project and compare the configurations to see where you messed up.

### The Assets folder

The Assets folder is where you should add your 3d models, images, etc. Rogue Engine knows nothing above that folder so make sure you keep your assets in there.

You're free to create as many sub-directories as you like and use the project structure that suits you best.

Follow me to the next article to explore what you can do next.