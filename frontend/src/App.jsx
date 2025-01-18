import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import Layout from './components/Main/Layout'
import Register from './components/Main/Register'
import OtpModal from './components/Main/OtpModal'
import Modal from './components/Main/Modal'
import Home from './components/Main/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
   
   {/* <Layout Register={<Register/>}/> */}
   {/* <Modal/> */}
   {/* <OtpModal/> */}
   <Home/>

  </div>
 
  )
}

export default App
