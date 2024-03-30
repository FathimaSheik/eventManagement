import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './Component/Navbar/Navbar'
import Event from './Component/Event/Event';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import CreateEvent from './Component/CreateEvent/CreateEvent';
import Showevent from './Component/Showevent/Showevent';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Event/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/createEvent' element={<CreateEvent/>}/>
      <Route path='/showevent' element={<Showevent/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App