import { useState } from 'react'
import './App.css'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'dark' : 'light'}>
      <h1>Theme Toggle SPA</h1>
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  )
}

export default App
