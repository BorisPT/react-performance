
// interessante : using lazy loading in React.
// IMPORTANT : The module needs to have a component as the default export of that module and we must use React.Suspense to define 
// a fallback to be rendered while the component is still loading.

// interessante : generally speaking, we should place the React.Suspense component as close to where it's needed as possible.
// Remember that everything that is wrapped around this component will be replaced by the fallback, so if it's too high on the 
// component tree, we might lose some of the UI elements.

// interessante : build and run production code
// To build the project: 
// npm run build

// To run the production version of the code
// npm num serve

// and in package.json
    "build": "craco build",
    "serve": "serve -s build",
