import React from 'react'
import'./Coloring.css'
import{Route,Routes,Link} from 'react-router-dom'
import HomePage from './HomePage.jsx'
import ServicePage from './ServicePage.jsx'
import ContactPage from './ContactPage.jsx'

const App = () => {
  return (
    <div>
      <div className='HSC'>
        <Link to='/'>HomePage</Link> <br />
        <br />
        <Link to='/servicepage'>ServicePage</Link> <br />
        <br />
        <Link to='/contactpage'>ContactPage</Link>
      </div>
      
    <div className='back'>
      <Routes >
      <Route path='/' element={ <HomePage></HomePage>}></Route>
      <Route path='/servicepage' element={ <ServicePage></ServicePage>}></Route>
      <Route path='/ContactPage' element={ <ContactPage></ContactPage>}></Route>
       </Routes>
     </div>

    </div>
  )
}

export default App
