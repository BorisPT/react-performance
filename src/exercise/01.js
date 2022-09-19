// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
// 💣 remove this import
// import Globe from '../globe'

// 🐨 use React.lazy to create a Globe component which uses a dynamic import
// to get the Globe component from the '../globe' module.
let Globe = null;  // = React.lazy(() => import('../globe'))

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  const onMouseHouverHandler = (event) => { 

    // console.log("MouseOver", event);

    if (Globe)
    {
      console.log("Module already loaded...");
      return;
    }

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

  // 🐨 wrap the code below in a <React.Suspense /> component
  // with a fallback.
  // 💰 try putting it in a few different places and observe how that
  // impacts the user experience.
  return (
    // <React.Suspense fallback={<div>Loading...</div>}>
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
    // </React.Suspense>
    
  )
}
// 🦉 Note that if you're not on the isolated page, then you'll notice that this
// app actually already has a React.Suspense component higher up in the tree
// where this component is rendered, so you *could* just rely on that one.

export default App
