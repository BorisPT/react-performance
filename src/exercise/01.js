// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// define a function to load the globe
const loadGlobe = () => { 
  // interessante : we don't really care about the return value of the import statement
  return import('../globe');
 };

 // interessante : lazy load the globe component
const Globe = React.lazy(loadGlobe)

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

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
      {/* // interessante : when the label gains focus, or when the user hovers over it, load the globe in the background. */}
      <label style={{marginBottom: '1rem'}} onMouseOver={loadGlobe} onFocus={loadGlobe}>
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
      {/* // interessante : using the React.Suspense to have a lazy load before showing the component. */}
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
