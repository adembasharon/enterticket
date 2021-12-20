import React from "react"
import styled from "styled-components"
// import Nav from "./Nav" 



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

const Timer=styled.div`
display:flex;
flex-direction:column;
position:absolute;
color:white;
top:50%;
margin-left:6em;
left:10;
transform:translateY(-50%);


`

const Days=styled.div`
display:flex;
font-family: 'Playfair Display', serif;
text-align:center;
flex-direction:column;
font-weight:900;
color:####;
padding:1.4em;
font-size:4rem
border-radius:5px;
border:1px solid white;
margin:2em 0;

`
const Maindays=styled.div`
display:flex;
gap:2em;

`

const Carouser=styled.div`
position:relative;
`
const Btn=styled.button`
padding:1em 2em;
color:white;
border-radius:5px;
border:1px solid white;
background-color:#131F2A;
`
const Links=styled.a`
text-decoration:none;
color:white;
font-weight:900;

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

const Paragraph=styled.p`
font-Weight:600;
font-size:3rem;
`

const Slider = () => {

    const [counter, setCounter] = React.useState(43200);
    React.useEffect(() => {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 5), 1000);
      return () => clearInterval(timer);
    }, [counter]);



    return (
        <>
        {/* < Nav /> */}
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

        <Timer>
            <div>
            <Paragraph>Show is Coming !</Paragraph>
            </div>
            <div>
                <Maindays>
            <Days>
            <div>
                <p>DAYS</p>
            </div>
            <div>
                <p>5</p>
            </div>
            </Days>

            <Days>
            <div>
                <p>HRS</p>
            </div>
            <div>
                <p>120</p>
            </div>
            </Days>

            <Days>
            <div>
                <p>MIN</p>
            </div>
            <div>
                <p>7200</p>
            </div>
            </Days>

            <Days>
            <div>
                <p>SEC</p>
            </div>
            <div>
                <p>{counter} </p>
            </div>
            </Days>
            </Maindays>
            </div>
            <div>
            <Btn><Links href="#">Ready To Enjoy ?</Links></Btn>
            </div>
        </Timer>
        </Carouser>
        </Slidecontainer>
        <Paragrap>
        <p> To all the fun lovers purposes to get your coming event ticket from Enterticket. Enterticket we bring fun at your disposal. </p>
        </Paragrap>
        </>
    )
}

export default Slider