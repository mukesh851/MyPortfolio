import React from 'react'
import './Contact.css'
import can from '../../assets/contact.png'

const Contact = () => {
  return (
    <div id="contact">
     <div className="leftcontact">
       <img src={can} alt="" />
     </div>
     <div className="rightcontact">
       <form action= "https://formspree.io/f/mrbwqpjn" method='POST'>
         <input name="Username" type='text' placeholder='Name' />
         <input name='Email' type='email' placeholder='Email'/>
         <textarea name='message' id='textarea' placeholder='message me'/>
         <input type='submit' id='btn' value='Submit' />
       </form>
     </div>
    </div>
  )
}

export default Contact