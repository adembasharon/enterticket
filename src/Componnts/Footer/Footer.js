
import styled from "styled-components"


import React from "react";


const Container=styled.div`

font-family:'Playfair Display' , Serif;
display:flex;
justify-content:center;
align-items:center;
gap:5em;

`
const Copy=styled.div`
display:flex;
align-items:center;
justify-content:center;
`


const Phoneicon=styled.div`
// color:#fff;
color:white;
`
const Blogs=styled.div`
margin-top:1.5em;

`
const Phone=styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:1em;
`
const Ul=styled.li`
font-size:1.2rem;
list-style-type:none;
`
const Paragraph=styled.div`
width:20%;
font-size:1.7rem;
margin-top:1em;
`

const Footercontainer=styled.div`
background-color:#393939;
color:#fff;
font-size:1rem;

@media(max-width:768px){
font-size:.5rem;


}

`
const Social=styled.div`
display:flex;
gap:2em;
margin:2em;
align-items:centre;
justify-content:center;
`




const Footer=()=>{
    return(
     <Footercontainer>
        <Container>

<Paragraph>
    <p>Get Udates On Celebrities Stuffs You Probably Want To Know About In Your Inbox.</p>
</Paragraph>

        <div>
           <Ul>
               <h2>Find Our </h2>
               <li>location</li>
               <li>About Us </li>
               <li>Terms & Privacy </li>

           </Ul>
        </div>


<div>
<Ul>
    <h2>Services </h2>
    <li>Events</li>
    <li>Login </li>
    <li>Register </li>

</Ul>
</div>

<div>
    <Blogs>
<Ul>
    
    <li>Blogs</li>
    <li>Help </li>
    <li>FAQ</li>
    
    <li>Shipping</li>

</Ul>
</Blogs>
</div>




<div>

   <Ul> <h2>Contact Us </h2></Ul>
    <Phone>
        <Phoneicon >
<img src="/images/phonel.svg"    width="25"/>

            </Phoneicon>
            <div>
    <p>+254 756 908 523</p>
    </div>
    </Phone>
    
    <Phone>
        <Phoneicon>
<img src="/images/email.svg" width="25"/>

</Phoneicon>
            <div>
    <p>rosha@gmail.com</p>
    </div>
    </Phone>


</div>

</Container>

<Social>
    <div>
    <p>Follow us on:</p>
    </div>
<div>
    <img src="images/fb.svg" width="25"/>
</div>
    
<div>
    <img src="images/ig.svg" width="25"/>
</div>
    
<div>
    <img src="images/in.svg" width="25"/>
</div>
    


</Social>

<Copy>
<p>&copy;All rights Reserved </p>
</Copy>
</Footercontainer>
    )
}

export default Footer;