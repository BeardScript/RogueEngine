### Static Assets

In Rogue Engine there's an established pipeline to make it simple for you to use your static assets. Don't worry though, remember that this is all built around a familiar web environment, so it's nothing any web developer hasn't seen before.

### The Static Folder

The first and most important thing is that you store your static assets in *ProjectFolder/Static/*. This folder will be accessible both in development and in your built project.

### Static folder url

The url of the static folder will not be the same in development and in your built project. In order to get the correct path from your code you should use the [getStaticPath](/EngineAPI/functions#getstaticpath) function, which will attach the static folder address to a given path.

### Built Project

If you have any static files, your built project will include the *Assets/Static/* folder with all its contents.
