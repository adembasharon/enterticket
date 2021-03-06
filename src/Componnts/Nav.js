import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"




const Container=styled.div`
margin:0 auto;
width:90%;


`

const NavbarP=styled.div`
font-family: 'Playfair Display', serif;
display:flex;
font-size:.5rem;
color:white;
justify-content:space-between;

`
const Login=styled.div`
display:flex;
gap:2em;
color:whitee;
font-size:1rem;
align-items:center;
justify-content:center;

`

const BTN=styled.button`
padding:.1em 1.5em;
font-size:1rem;
color:white;
border-radius:4px;
background-color:transparent;
border:1px solid white;
display:flex;
justify-content:center;
align-items:center;

`
const Links=styled.a`
text-decoration:none;
color:white;

`
const Color=styled.div`
background-color:#131F2A;
color:white;
text-decoration:none;

`


const Nav=()=>{

    const [scrolled,setScrolled]=useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 200 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }

      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })
    let navbarClasses=['navbar'];
      if(scrolled){
        navbarClasses.push('scrolled');
      }
    




    return (
        <Color>
        <Container>
            <NavbarP>
            <div>
<h2><Link to="/">ENTicket</Link></h2>
</div>
<Login>

<div><BTN><Link to="/">I'm New</Link></BTN></div>
    <div>
    <p><Link to="/login">Login</Link></p>
    </div>
    
    <div>
    <p><Link to="/Signup">Register</Link></p>
    </div>

    <div>
    <p><Links>About Us</Links></p>
    </div>
    
    </Login>
</NavbarP>



        </Container>
        </Color>
    )
}

export default Nav