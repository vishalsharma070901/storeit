import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


export default function ProtectedRoute() {
  const isLogedIn =  localStorage.getItem("token");
  
  return isLogedIn ? <Outlet /> : <Navigate to="/login" replace />;
}
