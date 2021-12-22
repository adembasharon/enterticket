import styled from "styled-components";
import React, { useState } from "react";
import { shows} from "../../data";

const Btn=styled.div`
font-size:1.5rem;
background-color:grey;
cursor:pointer;


`
const ImgContainer = styled.div`

width:25%;
border:2 px solid grey;
background-color:#7ED6AB;
border :2px solid grey;
margin:2em;
padding:1em;
border-radius:10px;



`

const View=styled.div`
`




//  <View> <button>View more</button></View> 



const Show = () => {
  return( 
   
        
    shows.map(show=>{
      return(
        <ImgContainer>
<img src={show.img}  width="200px" key={show.id}/>
    
    <h3>{show.title}</h3>
 <p>{show.des}</p>
    <p>{show.Day}</p>
<Btn>
  
 <button>Buy Ticket</button> 
 </Btn>
   
    </ImgContainer> 

    )
  })
  
    

                
  );
};

export default Show;
