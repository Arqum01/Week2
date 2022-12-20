import { useState } from 'react'
import About from './Components/About/About'
import Component2 from './Components/Component2/Component2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className="App">
      <div>
        <h1 className='hello'>Hello World</h1>
        
      </div>
      <About/>
      {/* <Component2/> */}
    </div>
    
  )
}

export default App
