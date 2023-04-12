import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App container mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
