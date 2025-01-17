import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import Layout from './components/Main/Layout'
import Register from './components/Main/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
   
   <Layout Register={<Register/>}/>

  </div>
 
  )
}

export default App
