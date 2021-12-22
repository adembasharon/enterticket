import React from "react"
import styled from "styled-components"
import Nav from "./Nav"
import Footer from './Footer/Footer';



const MusicOne = styled.div`
background-image: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)),url(/images/photoMusic1.jpeg);
background-repeat:no repeat;
height:50vh;
width:40vw;
background-size:cover;
backgroud-position:center center;
border:3px solid #566661;

`
const MusicTwo = styled.div`
background-image: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)),url(/images/photoMusic2.jpeg);
background-repeat:no repeat;
height:50vh;
width:40vw;
background-size:cover;
backgroud-position:center center;
border:3px solid #566661;

`

const Movie1 = styled.div`
background-image: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)),url(/images/photoMovie.jpeg);
background-repeat:no repeat;
height:50vh;
width:40vw;
background-size:cover;
backgroud-position:center center;
border:3px solid #566661;

`


const Movie = styled.div`
background-image: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.3)),url(/images/photoMovie3.jpeg);
background-repeat:no repeat;
height:50vh;
width:40vw;
background-size:cover;
backgroud-position:center center;
border:3px solid #566661;
`

const Music3 = styled.div`
background-image: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.3)),url(/images/photoMusic3.jpeg);
background-repeat:no repeat;
height:50vh;
width:40vw;
background-size:cover;
backgroud-position:center center;
border:3px solid #566661;
`

const Movie2 = styled.div`
background-image: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.3)),url(/images/photoMovie2.jpeg);
background-repeat:no repeat;
height:50vh;
width:40vw;
background-size:cover;
backgroud-position:center center;
border:3px solid #566661;
`

const Day=styled.div`
width:37px;
height:37px;
border-radius:50%;
border:1px solid white;
color:white;
font-size:1rem;
text-align:center;
background-color:#060813;

`
const Month=styled.div`
width:37px;
height:37px;
border-radius:50%;
border:1px solid white;
color:white;
font-size:1rem;
margin-top:.8em;
text-align:center;
background-color:#060813;
`
const Btn=styled.button`
border:4px;
color:white;

cursor:pointer;
background-color:#060813;
padding:.3em 2em;
border-radius:1px solid #49192C;

`
const Container=styled.div`
font-family: 'Playfair Display', serif;
display:flex;
flex-wrap:wrap;
gap:2em;
align-items:center;
justify-content:center;
margin-bottom:2em;
`
const Paragraph=styled.div`
text-align:center;
font-family: 'Playfair Display', serif;
font-size:3rem;
`



const Allshow=()=>{

return(
    <>
    <Nav/>
<Paragraph>Upcomming Shows and Events</Paragraph>
<Container>
    <MusicOne styled={{width:250 ,height:250}}>

<div>

    <div style={{color:"white" , fontSize:"4rem"}}>Chris Brown on Ground</div>
    <Day><p>24</p></Day>
    <Month><p>JAN</p></Month>
    <Month><p>SAT</p></Month>
    <div>
    <Btn>BUY TICKET</Btn>
</div>
</div>
</MusicOne>

<MusicTwo styled={{width:250 ,height:250}}>

<div>

    <div style={{color:"white" , fontSize:"4rem"}}>Free Guy </div>
    <Day><p>27</p></Day>
    <Month><p>JAN</p></Month>
    <Month><p>WED</p></Month>
    <div>
    <Btn>BUY TICKET</Btn>
</div>
</div>
</MusicTwo>

 
<Movie1 styled={{width:250 ,height:250}}>

<div>

    <div style={{color:"white" , fontSize:"4rem"}}>A Star is Born</div>
    <Day><p>30</p></Day>
    <Month><p>JAN</p></Month>
    <Month><p>SAT</p></Month>
    <div>
    <Btn>BUY TICKET</Btn>
</div>
</div>
</Movie1>


<Movie styled={{width:250 ,height:250}}>

<div>

    <div style={{color:"white" , fontSize:"4rem"}}>Dooms Day </div>
    <Day><p>12</p></Day>
    <Month><p>MAR</p></Month>
    <Month><p>SAT</p></Month>
    <div>
    <Btn>BUY TICKET</Btn>
</div>
</div>
</Movie>


<Movie2 styled={{width:250 ,height:250}}>

<div>

    <div style={{color:"white" , fontSize:"4rem"}}>Dunes</div>
    <Day><p>17</p></Day>
    <Month><p>MAY</p></Month>
    <Month><p>SAT</p></Month>
    <div>
    <Btn>BUY TICKET</Btn>
</div>
</div>
</Movie2>



<Music3 styled={{width:250 ,height:250}}>

<div>

    <div style={{color:"white" , fontSize:"4rem"}}>Sia and The Weekend</div>
    <Day><p>10</p></Day>
    <Month><p>FEB</p></Month>
    <Month><p>SAT</p></Month>
    <div>
    <Btn>BUY TICKET</Btn>
</div>
</div>
</Music3>


    </Container>

    <Footer/>
    </>
)




}
export default Allshow
