import {useState , useEffect} from "react";
import React from "react";
import styled from "styled-components"
import Nav from "./Nav"
import Footer from './Footer/Footer';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';


const Backgroundimg=styled.div`
display:flex;
margin-top:1em;
justify-content:center;
width:100%;
gap:4em;
color:black;
`


const Button=styled.button`

border-radius:4px;
border:1px solid #B3E0CF;
background:color:transparent;
color:black;
text-align:center;
margin-bottom:1em;
`


const Placehold=styled.div`
border-radius:4px;
border:1px solid #B3E0CF;
background:color:transparent;


`


const Name=styled.div`
display:flex;
flex-direction:column;
margin:2em 0;
`
        
const Icone=styled.div`
 display:flex;
color:black;
justify-content:flex-end;
border:none;
background-color:transparent;
`
const Container=styled.div`
display:flex;
font-family: 'Playfair Display', serif;

flex-direction:column;
justify-content:center;
align-items:center;

`
const Remember=styled.div`
display:flex;
gap:2em;
font-weight:400;
font-size:1.3rem

`
const Paragraph=styled.p`
font-weight:400;
margin-bottom:.4em;
font-family: 'Playfair Display', serif;

font-size:1.3rem
`

const Links=styled.a`
text-decoration:none;
color:black;
font-weight:400;
font-size:1.3rem

`

const PasswordContainer = styled.div`
display:flex;
width:100%;
margin-bottom:1em;
border-radius:4px;
border:2px solid #B3E0CF;
align-items:center;
`

const Label=styled.label`
display:block;
`




const Login=()=>{
    const [values, setValues]=useState({
password:"",
showPassword:false
    }
);


    const togglePassWordVissibility=()=>{
        setValues({showPassword:!values.showPassword})
    };



    return(
        <>
<Nav/>
    
        
    <Backgroundimg>

<div>

        <Container>        
            
            
                <div>
<h1>LOGIN</h1>
</div>
<div>

<Name>
<Label for="id number"><Paragraph>User Name</Paragraph></Label>

<div>
<Placehold><input style={{outline:"none" ,background:"transparent" ,border:"transparent" ,width:500}} type="text"  placeholder="" /></Placehold>
</div>
</Name>



    
    <div>
    <label ><Paragraph>Password</Paragraph></label>
    </div>
    <PasswordContainer>
    <div>
<input  style={{outline:"none" ,border:"transparent"}}type={values.showPassword ? "text":'password'} placeholder=''/>
</div>


<Icone onClick={togglePassWordVissibility}>
    {values.showPassword?<VisibilityIcon /> :<VisibilityOffIcon />}
</Icone>

</PasswordContainer>


<div>
<Button>< Links>Login</Links></Button>
</div>

<Remember>
<div>
<input type="checkbox" />
<label>Remember me</label>
</div>
<div>
<p><Links href="#"> Forgot Your Password ?</Links></p>
</div>
</Remember>

<div>
<Button><Links href="#"  >Create Account</Links></Button>
</div>
</div>
</Container>
</div>

</Backgroundimg> 
<Footer/> 
           
        </>
    )
}




export default Login