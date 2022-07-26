import React from "react"
import styled from "styled-components";
import Countdown from './Countdown';
import { Link } from "react-router-dom"
import Allshow from "./Allshow"



const Slidecontainer=styled.div`
font-family: 'Playfair Display', serif;



`

const SliderImageOne = styled.div`
background-image:linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)),url(/images/musicslide6.jpeg);
height:70vh;
background-repeat:no repeat;
background-size:cover;
backgroud-position:center center;
`
const SliderImageTwo = styled.div`
background-image: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)),url(/images/musicslide2.jpeg);
background-repeat:no repeat;
height:70vh;
background-size:cover;
backgroud-position:center center;
`
const SliderImageThree = styled.div`
background-image: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)),url(/images/musicslide5.jpeg);
height:70vh;
background-repeat:no repeat;
background-size:cover;
backgroud-position:center center;
`


const Carouser=styled.div`
position:relative;
`

const Paragrap=styled.p`
font-size:1.6rem;
font-family: 'Playfair Display', serif;
text-align:center;
width:40%;
margin:.7em 15em;
display:flex;
justify-content:center;
align-items:center;

`


const Slider = () => {


    return (
        <>
        <Slidecontainer>
        <Carouser>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <SliderImageOne className="carousel-item active">
      
    </SliderImageOne>
    <SliderImageTwo className="carousel-item">
      
    </SliderImageTwo>
    <SliderImageThree className="carousel-item">
      
    </SliderImageThree>
  </div>
</div>
{/* Timer */}
       <Countdown/>
          </Carouser>
        </Slidecontainer>
        <Paragrap>
        <p> To all the fun lovers purposes to get your coming event ticket from ENTicket. ENTicket we bring fun at your disposal.<Link to="/Allshow">View More Shows...</Link> </p>
        </Paragrap>
        </>
    )
}

export default Slider