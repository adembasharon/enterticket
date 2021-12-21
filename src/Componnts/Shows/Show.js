import styled from "styled-components";
import React, { useState } from "react";
import { shows} from "../../data";


const ImgContainer = styled.div`
display:flex;
justify-content:center;
// flex-direction:column;
gap:6em;
flex-wrap:wrap;
width:33%;
`





const Show = () => {
  return( 
    <ImgContainer>
        {
    shows.map(show=>{
      return(
<img src={show.img}  width="200px" key={show.id}/>
      )
  })
}
    </ImgContainer>             
  );
};

export default Show;
