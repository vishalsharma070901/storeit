import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import Login from './components/Main/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
   
   <Login/>
  </div>
 
  )
}

export default App
