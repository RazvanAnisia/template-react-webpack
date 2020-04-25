# React Webpack Template
Webpack template for React apps.

## Breaking changes because of babel v7, had to run these commands and use this config for babel
`npm i @babel/core @babel/preset-env @babel/preset-react -D` <br>
Inside of .babelrc:<br>
`.babelrc file -> {
"presets": ["@babel/preset-env", "@babel/preset-react"]}`
