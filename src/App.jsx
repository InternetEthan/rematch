import { useState } from 'react'
import Day from './components/Day'
import NewTask from './components/NewTask'

function App() {
  const [startDate, setStartDate] = useState(new Date()) // Set the starting day here

  const days = Array.from({ length: 20 }, (_, index) => {
    const date = new Date(startDate)
    date.setDate(date.getDate() + index)
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${month}/${day}`
  })

  return (
    <>
      <NewTask />
      <h1>rematch</h1>
      <div className="container">
        {days.map((day) => (
          <Day day={day} />
        ))}
      </div>
      <div className="container">
        <div className="rematch">
        <h1>rematch</h1>
        </div>
      </div>
    </>
  )
}

export default App
