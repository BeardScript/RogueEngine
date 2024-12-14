### Marketplace

The Marketplace is a great place to find assets, components, editor extensions and other utilities to help you with your project. These are distributed in the form of packages that you can install directly on your project.

### Accessing the Marketplace

You can find the marketplace in the "store" icon in the upper right corner of the editor. Alternatively you can open it with `alt/opt + m`. You must have logged in from the editor home screen to use the Marketplace.

### Installing Packages

To install a package we need to have the Marketplace opened within the editor and make sure that we're logged in.

Now search the asset that you wish to install and simply hit install or and open it. You'll find a find the `Install` button near the title in the package's page as well. The package will be downloaded and then installed within your project at: `rogue-packages/publisher/package-id`

### Updating Packages

To update a package follow the same steps to install it. When installing it the old files in `rogue-packages/publisher/package-id` will be replaced with the new ones.

### Creating Packages

To create a package, you must hold a seat for a [paid Rogue Engine license](). 

Make sure that all your package files are in `rogue-packages/username/package-id`. The `username` can be yours or the username of an account where you hold a seat with `write permission` for packages.

Go into the marketplace and select `+ create New` and fill up the form.

Make sure the `Owner` field coincides with the `username` in the package's path as shown above.

Keep in mind that `public` visibility will not take effect until you [submit your package for publishing](#publishing-packages).

**The identifier** that you input, must coincide with the `package-id` in the path as shown above.

If the code in your package requires `npm dependencies` to be installed, make sure you add them in the corresponding field.

If your package makes use of other packages in the marketplace, make sure you include them as `publisher/package-id` each separated by a space.

*Dependencies will be installed before your own package*

When you're ready, hit `Submit` and wait for the package to be uploaded. It may take a minute so it's a good chance to go get a refill.

Now you'll be able to find your package in the `My Packages` tab of the Marketplace window.

#### Updating Your Package

To update your own package, first search for it in the marketplace. You'll see an `update` button right beside it - select that.

Now same as when you created it, fill up the form. If you're only updating its information, leave the `Update Package Content` box unchecked. If you're actually updating any file in the package's contents, make sure that you check that box and that the updated contents are indeed available in `rogue-packages/username/package-id`.

### Publishing Packages

To publish a package of your own creation, first make sure that its visibility is set to `public` and then submit your request to `support@rogueengine.io`. At the moment, you can only publish free packages.
