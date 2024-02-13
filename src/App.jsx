import { useState } from 'react'
import './App.css'
import Day from './components/Day'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>rematch</h1>

      <Day ></Day>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
    </>
  )
}

export default App
