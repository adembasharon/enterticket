import React from "react"
import MenuIcon from '@mui/icons-material/Menu';
import styled from "styled-components"




const Container=styled.div`
background-image:url()
margin:0 auto;
height:100vh;
width:100vw;


`

const Navbar=styled.div`
display:flex;
background-color:pink;
justify-content:space-between;
`
const Login=styled.div`
display:flex;
gap:2em;
align-items:center;
justify-content:center;

`


const Nav=()=>{
    return (
        <Container>
            <Navbar>
            <div>
<h2>Ticket Sale</h2>
</div>
<Login>
    <div>
    <h3>Login</h3>
    </div>
    <div>
    <h3>Register</h3>
    </div>
    <div>
    <MenuIcon />
    </div>
    </Login>
</Navbar>
<p> To all the fun lovers purposes to get your coming event ticket from TiketSasa. TiketSasa we bring fun at your disposal. </p>
        </Container>
    )
}

export default Nav