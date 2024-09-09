import { useState } from 'react'
import reactLogo from './assets/pizza.png'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Greatest Pizza Around</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Number of Pizzas: {count}
        </button>
      </div>

    </>
  )
}

export default App
