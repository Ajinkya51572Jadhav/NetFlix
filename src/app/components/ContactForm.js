       "use client";
import React, { useState } from 'react'

const ContactForm = () => {
       
    const [user,setUser]=useState({username:"",email:"",phone:"",message:""});
    const [status,setStatus]=useState(null);

              function handleChange(e){
                  setUser((preVal)=>({...preVal,[e.target.name]:e.target.value}))
              };
                console.log(user);

   
      async   function handleSubmit(e){
          e.preventDefault();
          try{
          const responce = await fetch("/api/contact",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({
                      username:user.username,
                      email:user.email,
                      phone:user.phone,
                      message:user.message,                                                                                 
                    })
          });
          
          console.log(responce);

          if(responce.status===200){
            setUser({username:"",email:"",phone:"",message:""});
             setStatus('success');
           }else{
             setStatus('error');
           }


         }catch(e){
                      console.log(e);
          }

  } 

    return (
    <div>
    <h3 className='heading_contact'>Contact Form</h3>
    <div className='contact_form'>
    <form onSubmit={handleSubmit}>
    <h3>Name</h3>

    <label htmlFor='username' >
    <input className='btn-1 outer-shadow inner-shadow hover-in-shadow ' type='text' placeholder='Enter Your Name' name='username' id='username' value={user.username} onChange={handleChange}  required/>
    </label>
    
    <h3>Email</h3>
    <label htmlFor='email'>
    <input className='btn-1 outer-shadow inner-shadow hover-in-shadow ' type='text' placeholder='Enter Your Email' name='email' id='email' value={user.email} onChange={handleChange}   required/>
    </label>

    <h3>Phone</h3>
    <label htmlFor='phone'>
    <input className='btn-1 outer-shadow inner-shadow hover-in-shadow ' type='text' placeholder='Enter Your Phone No' name='phone' id='phone'  value={user.phone}  onChange={handleChange} required/>
    </label>
    
    <h3>Message</h3>
    <label htmlFor='message'>
    <textarea className='btn-1 outer-shadow inner-shadow hover-in-shadow ' type='text' placeholder='Enter Your Message' name='message' id='message' rows={4} cols={27} value={user.message} onChange={handleChange}  required></textarea>
    </label>
    
    <br/>
    <button type='submit' className='btn-1 outer-shadow inner-shadow hover-in-shadow '>send message</button>
    
    <div className='message_contact'>
    {status ==='success' && <p>Thank You For Your Message</p>}
    {status ==='error' && <h3>There was an error submitting your message</h3>}
    </div>

   

    </form>
    </div>
    
    <div className='map'>
    <h3>Search Location</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25599.69970304593!2d74.39728639888831!3d18.883934526148416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc332beede47115%3A0x25efa733b88ae9cc!2sNarayanGavahan%2C%20Maharashtra%20414301!5e1!3m2!1sen!2sin!4v1692509950443!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  )
}

export default ContactForm 