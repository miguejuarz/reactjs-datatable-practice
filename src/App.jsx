import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <div className='text-green-600 font-bold'>Hello World!</div>
      </div>
    </>
  )
}

export default App
