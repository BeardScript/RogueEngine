### Marketplace

The Marketplace is a great place to find assets, components, editor extensions and other utilities to help you with your project. These are distributed in the form of packages that you can install directly on your project.

### Accessing the Marketplace

You can find the marketplace at [marketplace.rogueengine.io](https://marketplace.rogueengine.io/) but you won't be able to install packages.

To install a package you need to access the marketplace from an open project within the editor. You can find it in the top menu at `Window > Rogue Marketplace`.

### Installing Packages

To install a package we need to have the Marketplace opened within the editor and make sure that we're logged in.

With that out of the way, find the asset that you wish to install and open it. You'll find a find the `Install` button bellow the gallery. The package will be downloaded and then installed within your project at: `rogue-packages/package-id`

### Updating Packages

To update a package follow the same steps to install it. When installing it the old files in `rogue-packages/package-id` will be replaced with the new ones.

### Publishing Packages

To publish a package you need to be logged in and be registered as a publisher. To register as a publisher click on your username on the top right and open your dashboard.

If you're not a publisher you'll see the `Become a Publisher` button. Click on that and follow the steps.

Once that's done, back in your dashboard you'll find the `Publish a Package` button. Click on there and fill out the form as instructed.

You'll need:

- The package file
- A thumbnail image
- At least one image for the gallery

### Creating a Package file

To create a package file, put all the contents of the package within a folder. Then, within the editor, right click on the containing folder and select `Create Package`.

A file with the name of the folder and the extension `.roguePackage` will be created.