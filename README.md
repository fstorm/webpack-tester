## Basic webpack stuff

A simple project that playes around with the basics of webpack.

### Installation 
After cloning, run `npm install`

### Running
You will first need to build the project: `npm run build`

After this, you can use `npm run start` to start the project and get things printed to your terminal.

Alternativly, `npm run bs` will build and start the project.

This project runs using Node.

### On webpack and tools used
This project has 2 entry fields. This means that 2 bundles are build, both saved in the build folder. This is so to enable the use of lazy-loading (currently not implemented/ commented out).
Minify is used in order to try and minimize the size of the bundle files. On first look it seems to decrease the size by about 30%. This tool is not recommended to be used by [Bable](https://webpack.js.org/plugins/babel-minify-webpack-plugin/), but seems fine for a demo.

[ts-loader](https://github.com/TypeStrong/ts-loader) was used in order to demonstrate transpiling typescript into ES5. 

Optimisation does not currently work :confused:. No idea why...
