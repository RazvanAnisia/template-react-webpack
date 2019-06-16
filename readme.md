## Description
React has 2 parts:<br>
-React - main library<br>
-React DOM - before v0.14 it was all included in React

Now that REACT is used in places that have nothing to do with the DOM, they were split up.

React + React DOM are the only dependencies we actually need for production.
The rest of them are dev dependencies. So we will add --save-dev/ -D

## What do we use Webpack for?
All of the React code needs to be bundled together, and this is where WEBPACK comes in.We also want webpack dev server for live-reload.
webpack-cli allows you to run webpack dev commands

Next we need Babel, because react uses ES6 classes, imports etc.. so we need to transpile that to browser-friendly code.

html-webpack-plugin ,this plugin creates the index.html for us, https://github.com/jantimon/html-webpack-plugin.

The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.

We can also choose a template, we can create an HTML file and include it as a template, that way we can still add other scripts etc.

Next to add all the babel presets, we need to create in the a root a file called .babel.rc


## Babel
We need a couple of presets for babel.And babel-loader, so we can compile JSX .

## Steps
Webpack needs a config file.

Inside of src/, index.js will contain our components and our entire React structure, this will get COMPILED into a file inside the dist/ folder when we run build.

Finally we will add 2 scripts to the package.json,
one to run the dev server one to build it into the dist folder.

## Breaking changes because of babel v7, had to run these commands and use this config for babel
`npm i @babel/core @babel/preset-env @babel/preset-react -D` <br>
Inside of .babelrc:<br>
`.babelrc file -> {
"presets": ["@babel/preset-env", "@babel/preset-react"]}`