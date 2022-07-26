import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import Slider from "./Slider";
import News from "./News"
import styled from "styled-components"
import Footer from './Footer/Footer';

const MainContainer=styled.div`
display:flex;

// Media
@media(max-width:810px){
flex-wrap:wrap;
// width:100%;
}

`

const HomePage =()=>{
return (
    <div>
<Nav/>
<Slider/>
<MainContainer>
<Main/>
</MainContainer>
<News/>
<Footer/>
</div>
)}
export default HomePage;