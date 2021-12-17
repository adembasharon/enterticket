import styled from "styled-components";
import React, { useState } from "react";
import { shows} from "../../data";




const Img = styled.img`
display:block;
`
const ShowsContainer = styled.img`
display:block;
`


const Show = () => {
  return( 
    <ShowsContainer>
        {
    shows.map(show=>{
      return(
<Img src={show.img}  width="300px" margin="3em"/>
      )
  })
}
    </ShowsContainer>             
  );
};

export default Show;
