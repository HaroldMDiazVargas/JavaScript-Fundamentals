# 🚀 Welcome to your new awesome project!

This project has been created using **webpack-cli**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application

Instructions:

1. Create a folder with project name
2. Using node package manager to install webpack as follows:
   npm i -g webpack webpack-cli @webpack-cli/init@0.2.2

3. Init, for install libraries(babel,webpack,etc) and configuration file answer questions(use src for save .js)
   webpack-cli init

4. Use -w(watch) in package.json for automatically regenerated bundle(dist/main.js):
   "scripts": { "build": "webpack -w }

5. In terminal:
   npm run build

Remember html file to use the bundle .js created by webpack
