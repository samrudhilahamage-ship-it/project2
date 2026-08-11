import React from 'react'
import Home from'./Home.jsx'
import  About from'./About.jsx'
import { Routes,Route,NavLink,useNavigate } from 'react-router-dom'

const App = () => {
  let nav=useNavigate()
  function bb(){
    nav('/')
  }
  return (
    <div>
      <button onClick={()=>nav('/about')}>about</button>
      <button onClick={bb}>Home</button>
      <Routes >
      <Route path='/' element={ <Home></Home>}></Route>
      <Route path='/about' element={ <About></About>}></Route>
       </Routes>
    </div>
  )
}

export default App
