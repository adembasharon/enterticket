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


// Media
@media(max-width:768px){
flex-wrap:wrap;


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


const Imagecont=styled.div`


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
    <div>
        <ImageContainer>
<img src={main.img}  width="250px" key={main.id}/>
<Divcolor>
<h2>{main.title}</h2>
<p>{main.des}</p>
<p>{main.time}</p>
<p>{main.day}</p>
<button onClick={()=>receipt(main.title,main.des,main.time,main.price,main.day)} style={{border:4 , borderRadius:"2px solid white",padding:2, color:"white", backgroundColor:"#00142B"}}>BUY TICKET</button>
</Divcolor>


</ImageContainer>  

</div>

      )


  } )

}
 
 </>
 
  );
 
};

export default Main;
