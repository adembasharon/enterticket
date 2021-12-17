import { grey } from "@mui/material/colors"
import styled from "styled-components"


const ImgColor1=styled.div`
`
const ImgColor2=styled.div`

`
const ImgColor3=styled.div`

`
const ImgColor4=styled.div`

`



const Viewmore=styled.div`
display:flex;
justify-content:center;
align-items center;





`


const Button=styled.div`
`

const Mainbar=styled.div`


`
const MainContainer=styled.div`


`
const Eventscard=styled.div`
display:flex;
justify-content:flex-end;


`

const Imagediv1=styled.div`
display:flex
flex-direction:row;
align-items:center;
justify-content:center;
margin:5em;
border:2px solid black;
padding:1em;
background-color:#E5B37F;

box-sizing:border-box;
`


const Main=()=>{
  return (
   <MainContainer>
       <Eventscard>
<div>
       <ImgColor1>
<Imagediv1>
  
  <div>
<img src="/images/music2.jpeg" style={{width:250}}/>
</div>
     <div>
       <p>Venue:Uhuru Gardens</p>
       <p>Day:sunday</p>
       <p>Time:11 a.m-3pm</p>
<Button>
<button>Buy Ticket</button>
</Button>

     </div>
     
</Imagediv1>
</ImgColor1>
</div>
<Imagediv1>
  <div>
<ImgColor2>
  <div>
<img src="/images/music3.jpeg" style={{width:250}}/>
</div>
     <div>
       <p>Venue:Canivour</p>
       <p>Day:Tuesday</p>
       <p>Time:10 a.m - 2pm</p>

<button>Buy Ticket</button>


     </div>
     </ImgColor2>
     </div>
</Imagediv1> 



<Imagediv1>
<ImgColor3>
  <div>
<img src="/images/music5.jpeg" style={{width:250}}/>
</div>
     <div>
       <p>Venue:City Park</p>
       <p>Day:Surturday</p>
       <p>Time:9a.m - 3pm</p>

<button>Buy Ticket</button>


     </div>
     </ImgColor3>
</Imagediv1>

<Imagediv1>
<ImgColor4>
  <div>
<img src="/images/img4.jpg" style={{width:250 , height:390}}/>
</div>
     <div>
       <p>Venue:City Park</p>
       <p>Day:Surturday</p>
       <p>Time:9a.m - 3pm</p>

<button>Buy Ticket</button>


     </div>
     </ImgColor4>
</Imagediv1>




       </Eventscard>

       <Viewmore>
<button  style={{padding:4,padding:1}}>View more</button>


       </Viewmore>


   </MainContainer>
  );
}

export default Main;
