import { grey } from "@mui/material/colors"
import styled from "styled-components"
import { main} from "../data";
import React from "react";
import { color } from "@mui/system";

const ImageContainer=styled.div`


border:2px solid green;
margin-left:5em;
border-radius:10px;
padding:2em;





`


const Viewmore=styled.div`
display:flex;
justify-content:center;
align-items center;
text-align:center;





`


const Button=styled.div`
`

const Mainbar=styled.div`


`


const Imagecont=styled.div`


`





const MainContainer=styled.div`


`
const Eventscard=styled.div`
// display:flex;
// justify-content:flex-end;


`

const Divcolor=styled.div`


` 

const Main = () => {
  return( 
   
        
    main.map(main=>{
      return(
    <div>
        <ImageContainer>
<img src={main.img}  width="250px" key={main.id}/>
<Divcolor>
<h2>{main.title}</h2>
<p>{main.des}</p>
<p>{main.Time}</p>
<p>{main.Day}</p>
<button style={{border:4 , borderRadius:"2px solid white",padding:2, color:"white", backgroundColor:"#00142B"}}>BUY TICKET</button>
</Divcolor>


</ImageContainer>  

</div>

      )


  },
  
  )
 
 
  );
 
};

export default Main;
