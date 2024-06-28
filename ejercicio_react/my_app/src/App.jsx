import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import logo from '../public/ayte_1.svg'
import './App.css'
import Profile from './componentes/app.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <div>
      
      <Profile/>

    </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src='https://d3nv2arudvw7ln.cloudfront.net/images/global/195/1003/93986-new3-pzero-trofeo-r-technology-1505470075362.png' className="logo react" alt="React logo" />
        </a>
        <a href="#" target="_blank">
          <img src ={logo} className="logo ayte" alt="ayte logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
