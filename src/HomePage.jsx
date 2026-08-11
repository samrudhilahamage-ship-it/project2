import React from 'react'
import './Coloring.css'

const HomePage = () => {
  return (
    <div >
         <div className='aa'>
        <h1>Mysite</h1>
        <p>home</p>
        <p>services</p>
        <p>contact</p>
        </div>
        <hr />
        <div className='c' >
            <h1>Welcome to MySite</h1>
            <h3>we provide simpleand useful solutions for your everyday needs</h3> <br />
            <br />
            <button className='b'> Learn More</button>
            <div className='i'>
            <img src="https://thumbs.dreamstime.com/z/man-working-computer-vector-business-icon-man-working-pc-115379858.jpg" alt="" />
            </div>
           
            <div className='cc'>
               <hr />
               <br />
               
                <center><h3>@2026 MySite.All right reserved</h3></center>
                <hr />
            </div>
        </div>
     </div>
  )
}

export default HomePage
