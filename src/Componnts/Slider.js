import React from "react"
import styled from "styled-components"

const Slidecontainer=styled.div`



`

const SliderImageOne = styled.div`
background:url(/images/slide1.jpeg);
height:100vh;

`
const SliderImageTwo = styled.div`
background:url(/images/slide2.jpeg);
height:100vh;
`
const SliderImageThree = styled.div`
background:url(/images/slide3.jpeg);
height:100vh;
`

const Timer=styled.div`
display:flex;
flex-direction:row;
position:absolute;
color:white;
top:30%;
margine-left:4em;
left:10;
// transform:translatey(-50%,-50%)

`
const Carouser=styled.div`
position:relative;
`


const Slider = () => {
    return (
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
</Carouser>
        <Timer>
            <p>Show is Comming !</p>
            <div>
            <div>
                <p>DAYS</p>
            </div>
            <div>
                <p>16</p>
            </div>
            </div>

            <div>
            <div>
                <p>HOURS</p>
            </div>
            <div>
                <p>3181</p>
            </div>
            </div>

            <div>
            <div>
                <p>MIN</p>
            </div>
            <div>
                <p>2564</p>
            </div>
            </div>

            <div>
            <div>
                <p>SEC</p>
            </div>
            <div>
                <p>16754</p>
            </div>
            </div>
            <button><a href="#">Ready To Enjoy ?</a></button>
        </Timer>
        </Slidecontainer>
    )
}

export default Slider