# Intro:

I made this project with Oskar Kowalów to makes repeatedly work stupid-easy. 

**For localhost test**, copy-paste all `.tgz` into `./lib` and change path in package.json.

## Storybooks

Each Storybook requires to be installed separately by:

```shell
npm install --legacy-peer-deps
npm run start
```

`--legacy-peer-deps` is required for Vue2 and Angular11

### Composition

* Collect all others storybooks into one.
* Requires all storybooks to be run.
* In folder: `./composition`
* In browser: http://localhost:6006/

### Vanilla

* Covered with cypress tests
* In folder: `./vanilla`
* In browser: http://localhost:6010/

### Angular

* TODO: I have to investigate more convenient way to use our components. 
* In folder: `./angular`
* In browser: http://localhost:6008/

### React

* Covered with cypress tests
* In folder: `./react`
* In browser: http://localhost:6011/

### VUE

* In folder: `./vue`
* In browser: http://localhost:6009/

## TODO:

* [ ] Investigate how to call instance methods when using  wrappers.
* [ ] https://storybook.js.org/addons/storycap where cypress is redundant
