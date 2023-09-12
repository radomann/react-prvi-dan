import { useState } from 'react'
import { RickAndMortyCharacters } from './components/RickAndMortyCharacters'

import './App.css'
import { Counter } from './components/reducerDemo'
import { RefDemo } from './components/refDemo'
import { ForwRefDemo } from './components/forwardRefDemo'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { ThemeContext } from './contexts/ThemeContext'
import { Toolbar } from './components/Toolbar'

const {Provider} = ThemeContext

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('dsaasd')

  const handleUserInput = (event)=>{
    
    console.log(event.target.value);
    setInput(event.target.value)
  }

  return <><Provider value='dark' >

  </Provider>
  <Toolbar />

  </> 
  //<ThemeSwitcher /> 
  //<ForwRefDemo /> 
  // <RefDemo />
  // <Counter /> 
  // <RickAndMortyCharacters/>
    /* <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={(event) => console.log(event)}>
          count is {count}
        </button>
        <p style={{ backgroundColor: "limegreen" }}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <input name='test' value={input} placeholder='Enter text' onChange={handleUserInput} />
    </> */
}

export default App;
