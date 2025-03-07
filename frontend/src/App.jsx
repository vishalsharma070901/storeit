import { useEffect, useState } from 'react';
import './App.css';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import MyState from './Context/MyState';
import { Toaster } from "@/components/ui/toaster";
import Layout from './components/Reusable/Layout';
import Register from './components/Main/Register';
import Home from './components/Main/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Main/Login';
import Dashboard from './components/Main/Dashboard';
import Images from './components/Main/Images';
import Media from './components/Main/Media';
import Documents from './components/Main/Documents';
import ProtectedRoute from './components/Main/ProtectedRoute';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    setIsLoggedIn(false);
  }
  , []);


  return (
    <MyState>
      <Theme>
        <Toaster />
        <Router>
          <Routes>
           
            <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} />

     
            <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Layout><Login /></Layout>} />
            <Route path="/register" element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Layout><Register /></Layout>} />

         
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Home><Dashboard /></Home>} />
              <Route path="/images" element={<Home><Images /></Home>} />
              <Route path="/documents" element={<Home><Documents /></Home>} />
              <Route path="/media" element={<Home><Media /></Home>} />
            </Route>

       
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </Theme>
    </MyState>
  );
}

export default App;
