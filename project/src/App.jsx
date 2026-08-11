import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'

const App = () => {
  return (
    <div>
      <NavLink className={bb} to='/'>
      Home</NavLink>
      <NavLink className={bb} to='/about'>
          About
      </NavLink>
      <div>
        <Routes >
      <Route path='/' element={ <Home></Home>}></Route>
      <Route path='/about' element={ <About></About>}></Route>
       </Routes>
      </div>
    </div>
  )
}

export default App
