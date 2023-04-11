import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App container mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
