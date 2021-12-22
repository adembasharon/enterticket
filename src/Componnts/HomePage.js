import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import Slider from "./Slider";
import News from "./News"
import styled from "styled-components"
// import Select from "../Componnts/Select"
import Footer from './Footer/Footer';

const MainContainer=styled.div`
display:flex;

`

const HomePage =()=>{
return (
    <div>
<Nav/>
{/* <Select/> */}
<Slider/>
<MainContainer>
<Main/>
</MainContainer>

<News/>
<Footer/>



    </div>
)

}
export default HomePage;