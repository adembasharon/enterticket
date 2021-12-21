import Footer from './Footer/Footer';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearIcon from '@mui/icons-material/Clear';

import React, {useState} from "react";
import styled from "styled-components"
import Nav from "./Nav";
import {users} from "../users";


const Backgroundimg=styled.div`
margin-top:1em;
display:flex;
justify-content:center;
gap:5em;
color:black;
`


const Button=styled.div`

border-radius:4px;
border:1px solid black;
background:color:transparent;
color:black;
text-align:center;
cursor:pointer;
margin-bottom:2em;
`
const Placehold=styled.div`
border-radius:4px;
border:1px solid black;
background:color:transparent;


`

const Email=styled.div`
display:flex;
flex-direction:column;
margin:2em 0;
`
const Name=styled.div`
display:flex;
flex-direction:column;
margin:2em 0;
`


const Icone=styled.div`
margin-top:1.5em;
display:flex;
color:black;
border:none;
border:1px solid black;
background-color:white;
`
const Container=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`

const Paragraph=styled.p`
font-weight:400;
margin-bottom:.4em;
font-size:1.3rem
`

const Links=styled.a`
text-decoration:none;
color:black;
font-weight:400;
font-size:1.3rem
`


const Signup=()=>{

    const username=React.createRef();

    const password=React.createRef();


    const confirmPassword=React.createRef();

    const email=React.createRef();

    const handleRegister = ()=>{
        const newUser = {
            username:username.current.value,
            password:password.current.value,
            confirmPassword:confirmPassword.current.value,
            email:email.current.value
        }
users.push(newUser)
        localStorage.setItem("storedUsers", JSON.stringify(users))
    }


const[confirmFormPassword , setConfirmFormPassword]=useState("")
const [formPassword , setFormPassword]=useState("")

function onPasswordChange(e) {
    const passwordValue=e.target.value;
    setFormPassword(passwordValue);}

    function onPasswordConfirmChange(e) {
        const passwordValue=e.target.value;
        setConfirmFormPassword(passwordValue);
    }
    

const checkIcon=()=>{
    if(confirmFormPassword!==""){
        return formPassword===confirmFormPassword?<CheckOutlinedIcon style={{color:"green"}}/>:<ClearIcon style={{color:"red"}}/>
    } 
}
return(
        <>
<Nav/>
    
        
    <Backgroundimg>


<div>

        <Container>        
            
            
                <div>
<h1>SignUp</h1>
</div>
<div>
<Email>
    <div>
<label for="email"><Paragraph >User Name</Paragraph></label>
</div>
<div>
<Placehold><input ref={username} style={{background:"transparent" ,border:"transparent" ,width:500}} type="text" placeholder="" /></Placehold>
</div>

</Email>

<Name>
    <div>
<label for="id number"><Paragraph >Enter Password</Paragraph></label>
</div>
<div>
<Placehold><input onChange={(e)=>onPasswordChange(e)} ref={password} style={{background:"transparent" ,border:"transparent" ,width:500}} type="password" placeholder="" /></Placehold>
</div>
</Name>


<Name>
    <div>
<label for="id number"><Paragraph >Confirm Password</Paragraph></label>

</div>
<div>
<Placehold><input  onChange={(e)=>onPasswordConfirmChange(e)} ref={confirmPassword} style={{background:"transparent" ,border:"transparent" ,width:500}} type="password" placeholder="" /></Placehold>
<div>
{checkIcon()}
</div>

</div>
</Name>


<Name>
    <div>
<label for="id number"><Paragraph >Enter Email Adress</Paragraph></label>
</div>
<div>
<Placehold><input ref={email} style={{background:"transparent" ,border:"transparent" ,width:500}} type="text" placeholder="" /></Placehold>
</div>
</Name>


<div style={{color:"white"}}>
<button style={{padding:2, marginBottom:6, borderRadius:4 , border:"2pe solid black"}} onClick={handleRegister}><Links href="#">Submit</Links></button>
</div>
</div>
</Container>
</div>

</Backgroundimg>
        <Footer />

           
        </>
    )
}






export default Signup