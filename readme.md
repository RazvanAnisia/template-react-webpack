React has 2 parts:
-React - main library,
-React DOM - before v0.14 it was all included in React

Now that REACT is used in places that have nothing to do with the DOM, the split them up.

React + React DOM are the onl dependencies we actually need for prod.
The rest of them are dev dependencies. So we will add --save-dev/ -D

All of the React code needs to be bundled together, and this is where WEBPACK comes in.
We also want webpack dev server for live-reload

webpack-cli allows you to run webpack dev commands

Next we need Babel, because react uses ES6 classes, imports etc.. so we need to transpile that to browser-friendly code.

We need a couple of presets for babel.And babel-loader, so we can compile JSX .

We need a config file for webpack

Inside of src/index.js, this will contain our components and our entire React structure, will get COMPILED into a file inside the dist/ folder.

 html-webpack-plugin ,this plugin creates the index.html for us, https://github.com/jantimon/html-webpack-plugin.

 The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.

We can also choose a template, we can create an HTML file and include it as a template, that way we can still add other scripts etc.

Next to add all the babel presets, we need to create in the a root a file called .babel.rc

We can use imports because we use babel.

Finally we will add 2 scripts to the package.json,
one to run the dev server one to build it into the dist folder.

npm i @babel/core @babel/preset-env @babel/preset-react -D
.babelrc file -> {
"presets": ["@babel/preset-env", "@babel/preset-react"]}