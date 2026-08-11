import React from 'react'
import'./Coloring.css'

const ServicePage = () => {
  return (
    <div>
      <div className='s'>
        <h1>MySite</h1>
        <p>home</p>
        <p>services</p>
        <p>contact</p>
        
      </div>
      
      
      <center><h1>Our Services</h1></center>
      <div className='t'>
      <table border={5}>
        <tr>
          <p><svg className='ii' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-177 23q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm120-160q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm200 0q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm120 160q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z"/></svg></p>
          <h1>web design</h1>
          <h3>we design beautiful 
            <br />and responding website</h3>
        </tr>
      </table>
      <table border={5}>
        <tr>
          <p><svg className='iii' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-280 40-480l200-200 56 56-143 144 143 144-56 56Zm178 132-76-24 200-640 76 24-200 640Zm302-132-56-56 143-144-143-144 56-56 200 200-200 200Z"/></svg></p>
          <h1>Development</h1>
          <h3>we design beautiful 
            <br />and responding website</h3>
              </tr>
      </table>
      <table border={5}>
        <tr>
          <p><svg className='iiii' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z"/></svg></p>
          <h1>Marketing</h1>
           <h3>we design beautiful 
            <br />and responding website</h3>
         </tr>
      </table>
      </div> <br />
     
       <br />
      <div className='ss'>
        <hr />
        <br />
        <center> @2026 MySite.All right reserved</center>
        <br />
        <hr />
      </div>
    </div>
  )
}

export default ServicePage
