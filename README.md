# Notes

Notes - it is a simple notepad for taking notes.

## Main Technology

[Redux](https://redux.js.org/) - is a predictable state container for JavaScript apps.

[Eslint  - airbnb config](https://www.npmjs.com/package/eslint-config-airbnb) - this package provides Airbnb's .eslintrc as an extensible shared config.
                                                                     
[Immer](https://immerjs.github.io/immer/) - is a tiny package that allows you to work with immutable state in a more convenient way.

[Material-UI](https://material-ui.com/) - react components for faster and easier web development

[React Draft Wysiwyg](https://www.npmjs.com/package/react-draft-wysiwyg) - html editor

## Designing a Normalized State
The basic concepts of normalizing data are:

* Each type of data gets its own "table" in the state.
* Each "data table" should store the individual items in an object, with the IDs of the items as keys and the items themselves as the values.
* Any references to individual items should be done by storing the item's ID.
* Arrays of IDs should be used to indicate ordering.

```javascript
const state = {
  folders: {
    byId: {},
    allIds: []
  },
  notes: {
    byId: {},
    allIds: []
  }
}
```
## Available Scripts

In the project directory, you can run:

```bash
npm start
```
Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

```bash
npm run build
```

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Sketch project
![Project Sketch](https://i.pinimg.com/originals/c1/38/cb/c138cb2b872cb844f21e2817f4a41afb.png)
