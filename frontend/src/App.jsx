import { useState } from 'react'
import './App.css'

import Layout from './components/Reusable/Layout'
import Register from './components/Main/Register'
import Home from './components/Main/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Main/Login'
import Dashboard from './components/Main/Dashboard'
import Images from './components/Main/Images'
import Media from './components/Main/Media'
import Documents from './components/Main/Documents'
function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
    <Routes>
    <Route path="/" element={<Navigate to="/login" replace />}/>
    <Route path="/login" element={<Layout><Login /></Layout>} />
    <Route path="/register" element={<Layout><Register /></Layout>}/>
    <Route path='/dashboard' element={<Home><Dashboard/></Home>}/>
    <Route path='/images' element={<Home><Images/> </Home>}/>
    <Route path='/documents' element={<Home><Documents/></Home>}/>
    <Route path='/media' element={<Home><Media/></Home>}/>

    </Routes>
  </Router>

 
 
  )
}

export default App
