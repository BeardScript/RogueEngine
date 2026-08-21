### Input Manager

The Input Manager Window provides a visual interface to view and edit your project's input configuration.

It provides an action-based system to help you easily bind, rebind and set multiple mappings for different input devices.

Check out the Input section of these docs to see the API.

To open the Input Manager Window click on `Window -> Input Manager` or press `alt/opt + I`.

### Input Groups

The Rogue Engine Input system provides Input Groups to define multiple mappings for different purposes.

As an example, you could have a mapping to control a character with gamepad or mouse and keyboard, and a second mapping to drive for when your character jumps into a car. We do this by leveraging Input Groups.

The main Input Group you can see in the window is the default. Input Actions under this group can be accessed from your code or Visual Component Bricks by their names alone.

#### Adding Groups

To create our own separate mapping we need to create a Group. For this we simply press the Add Input Group at the bottom.

Click on the name and rename it to something more familiar, relevant to your project.

To access Actions in your Group you'll do it as `[GroupName].[ActionName]`.

### Input Actions

Input Actions are user interaction within our project. They are always part of an Input Group, either the default or a custom one.

Action can be either Buttons or Axes. In the case of Axes, we can provide an analog or button source, depending on the chosen input device.

#### Adding Actions

To add an action press one of the buttons beside an Input Group: `Action Button` or `Action Axes`.

A blank Action will show up with a list of input devices to add.

Give your Input Action a more familiar name by clicking on the current name tag.

#### Adding Input Sources

All Input Actions, will give you a list of Input Sources to choose from. The configuration of each will be quite different if they're a Button or Axes Action.

To add an input source simply click on it, then choose your desired keys, buttons or analog axes.

### Saving Configuration

Always remember to press the Save button. Your configuration will be stored in the `rogue-config.json` file at the base folder of your project. You can copy the `inputConfig` field and paste in on other projects to load the same configuration. Just make sure to reload the project.
