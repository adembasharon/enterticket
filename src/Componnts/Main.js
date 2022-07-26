import { grey } from "@mui/material/colors"
import styled from "styled-components"
import { main} from "../data";
import React from "react";
import { color } from "@mui/system";
import { jsPDF } from "jspdf";

const ImageContainer=styled.div`

font-family: 'Playfair Display', serif;
dislay:flex;
border:2px solid black;
margin-left:2em;
border-radius:10px;
padding:2em;
width:25%;
height:fit-content;
@media(max-width:810px){
width:45%;
margin-bottom:1em;


}





`




const Viewmore=styled.div`
display:flex;
justify-content:center;
text-align:center;





`


const Button=styled.div`
`

const Mainbar=styled.div`


`


const Image=styled.div`

height:40%;

`

const MainContainer=styled.div`
display:flex;

`
const Eventscard=styled.div`
 display:flex;
 justify-content:flex-end;


`

const Divcolor=styled.div`


` 









const Main = () => {

  const receipt=(eventTitle,eventDes,eventTime,eventPrice,eventDay)=>{

    const doc=new jsPDF();
    doc.text(10,20 , "Welcome to ENTicket");
    doc.addFont("italic")
    doc.text(10,45,eventTitle)
    doc.text(10,60,eventDes)
    doc.text( 10,75,eventTime)
    doc.text( 10, 90,eventPrice)
    doc.text(10,105, eventDay)
    doc.save("ENTicket.pdf")


  }
  

  return( 
   
     <> 
     {  
    main.map(main=>{
      return(

        <ImageContainer>
          <Image>
<img src={main.img}  width="100%" height="100%" style={{objectFit:"cover"}} key={main.id}/>
</Image>
<Divcolor>
<h2>{main.title}</h2>
<p>{main.des}</p>
<p>{main.time}</p>
<p>{main.day}</p>
<button onClick={()=>receipt(main.title,main.des,main.time,main.price,main.day)} style={{borderRadius:"4px" , border:"2px solid white",padding:".4em 2em", color:"white", backgroundColor:"#00142B"}}>BUY TICKET</button>
</Divcolor>


</ImageContainer>  



      )


  } )

}
 
 </>
 
  );
 
};

export default Main;
