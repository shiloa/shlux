# Flux Framework Comparison

Small comparison of flux/data-flow implementations that play nicely with React. The end result is a small SPA that allows you to filter through a list of fake server instances.

![ScreenCapture](http://zippy.gfycat.com/CostlyTartGardensnake.gif)

### How the Code is Organized

Each branch contains a specific implementation of the same app using the selected technology. The branch is usually named after the corrosponding library. So, for example, the `redux` branch contains the [redux](https://github.com/gaearon/redux) implementation.

To see supported implementation, list all the branches:

```sh
$ git branch -a
```

### How to Use
The `master` branch contains just the basic app skeleton, and is not designed to be run. If you want to check out a specific implementation, checkout the branch, run `npm install` and start the server:

```sh
$ git checkout redux
$ npm install
$ npm run dev

# open new tab
$ python -m SimpleHTTPServer
```
App is available in [http://localhost:8000](http://localhost:8000)

### 
