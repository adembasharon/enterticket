import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styled from "styled-components"
import { Link } from "react-router-dom"



const Paragraph=styled.p`
font-family: 'Playfair Display', serif;
font-size:2rem;
`

const Submit=styled.div`
 display:flex;
 flex-direction:row;
 gap:1em;
 margin-bottom:1em;
 
`
const Newsp=styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 
 `
 const ShowButton = styled.button`
 padding:.5em 1em;
 margin:1em 0;
 color:black;
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
        <ShowButton> <Link to="/Select">All shows</Link></ShowButton>
        </div>
      <div>
      <Paragraph><p>For latest shows and events register for our newsletter</p></Paragraph>
      </div>
      <Submit>
        
    <form ref={form}  onSubmit={sendEmail}>
      
    
    
   <input style={{marginRight:4}}type="email" name="user_email" placeholder='Email' />
   
   
      <input type="submit" value="Submit"/>
      
    </form>
    </Submit>
    </Newsp>
  );
};
export default News