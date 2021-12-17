
import React from "react";
import styled from "styled-components"
import Nav from "./Nav"


const Backgroundimg=styled.div`
margin-top:1em;
display:flex;
justify-content:center;
gap:5em;
color:#F09225;
`


const BTN=styled.div`

border-radius:4px;
border:1px solid #E8545E;
background:color:transparent;
color:black;
text-align:center;
margin-bottom:2em;
`
const Placehold=styled.div`
border-radius:4px;
border:1px solid #E8545E;
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
border:1px solid #E8545E;
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
color:#F09225;
font-weight:400;
font-size:1.3rem
`

const Signup=()=>{
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
<label for="email"><Paragraph>User Name</Paragraph></label>
</div>
<div>
<Placehold><input style={{background:"transparent" ,border:"transparent" ,width:500}} type="text" placeholder="" /></Placehold>
</div>

</Email>

<Name>
    <div>
<label for="id number"><Paragraph>Enter Password</Paragraph></label>
</div>
<div>
<Placehold><input style={{background:"transparent" ,border:"transparent" ,width:500}} type="text" placeholder="" /></Placehold>
</div>
</Name>


<Name>
    <div>
<label for="id number"><Paragraph>Confirm Password</Paragraph></label>
</div>
<div>
<Placehold><input style={{background:"transparent" ,border:"transparent" ,width:500}} type="text" placeholder="" /></Placehold>
</div>
</Name>


<Name>
    <div>
<label for="id number"><Paragraph>Enter ID Number</Paragraph></label>
</div>
<div>
<Placehold><input style={{background:"transparent" ,border:"transparent" ,width:500}} type="text" placeholder="" /></Placehold>
</div>
</Name>



<div>
<BTN><Links href="#">SignUp?</Links></BTN>
</div>

<div>
<BTN><Links href="#">Submit</Links></BTN>
</div>
</div>
</Container>
</div>

<div>
<img src="/images/Launch.png" />

</div>

</Backgroundimg>
        

           
        </>
    )
}




export default Signup
