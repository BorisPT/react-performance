// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

let Globe = null; 

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  const onMouseHouverHandler = (event) => { 

    // console.log("MouseOver", event);

    // interessante : if the module is already loaded, don't do anything.
    if (Globe)
    {
      console.log("Module already loaded...");
      return;
    }

    // interessante : import the module and then assign its default export to the Globe component. 
    import('../globe').then(
      module => {
        console.log("Loaded Globe:", module);
        Globe = module.default;
      },
      error => {
        console.log("There was an error loading the module:", error);
      },
    )
  
   };

  return (    
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      {/* // interessante : when the user hovers over the label start loading the globe. */}
      <label style={{marginBottom: '1rem'}} onMouseOver={onMouseHouverHandler}>
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
      <React.Suspense fallback={<div>Loading...</div>}>
      <div style={{width: 400, height: 400}}>
        {showGlobe ? <Globe /> : null}
      </div>
      </React.Suspense>
    </div>    
    
  )
}
// 🦉 Note that if you're not on the isolated page, then you'll notice that this
// app actually already has a React.Suspense component higher up in the tree
// where this component is rendered, so you *could* just rely on that one.

export default App
