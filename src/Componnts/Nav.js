import React from "react"
import styled from "styled-components"




const Container=styled.div`
margin:0 auto;
width:90%;
margin:.2em 2em;

`

const Navbar=styled.div`
font-family: 'Playfair Display', serif;
display:flex;
font-size:.5rem;
justify-content:space-between;

`
const Login=styled.div`
display:flex;
gap:2em;
font-size:1rem;
align-items:center;
justify-content:center;

`

const BTN=styled.button`
padding:.1em 1.5em;
font-size:1rem;
border-radius:4px;
background-color:transparent;
border:1px solid black;
display:flex;
justify-content:center;
align-items:center;

`
const Links=styled.a`
text-decoration:none;
color:black;

`



const Nav=()=>{
    return (
        <Container>
            <Navbar>
            <div>
<h2>ENTicket</h2>
</div>
<Login>

<div><BTN><Links href="#">I'm New</Links></BTN></div>
    <div>
    <p><Links href="#">Login</Links></p>
    </div>
    
    <div>
    <p><Links href="#">Register</Links></p>
    </div>

    <div>
    <p><Links href="#">About Us</Links></p>
    </div>
    
    </Login>
</Navbar>



        </Container>
    )
}

export default Nav