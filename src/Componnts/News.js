import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {send} from 'emailjs-com'
import styled from "styled-components"



const Paragraph=styled.p`
font-family: 'Playfair Display', serif;
font-size:2rem;
`

const Submit=styled.div`
 display:flex;
 flex-direction:row;
 gap:1em;
 
`
const Newsp=styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 
 `


const News = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5t4rhg4', 'template_e4o5oge', form.current, 'user_oqT8ncrIVIAxqBx0FPqfU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Newsp>
      <div>
      <Paragraph><p>For latest shows and events register for our newsletter</p></Paragraph>
      </div>
      <Submit>
        
    <form ref={form}  onSubmit={sendEmail}>
      
    <label>Email:</label>
    
   <input style={{marginRight:4}}type="email" name="user_email" placeholder='Email' />
   
   
      <input type="submit" value="Submit"/>
      
    </form>
    </Submit>
    </Newsp>
  );
};
export default News