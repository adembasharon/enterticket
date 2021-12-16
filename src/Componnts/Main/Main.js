import styled from "styled-components"

import './App.css';



const Mainbar=styled.div`


`
const MainContainer=styled.div`


`

const Main=()=>{
  return (
   <MainContainer>
       <Events-card />
     <div>
       <p>Venue:Uhuru Gardens</p>
       <p>Day:sunday</p>
       <p>Time:11 a.m-3pm</p>

<button>Buy Ticket</button>


     </div>

     <div>
       <p>Venue:City Park</p>
       <p>Day:Tuesday</p>
       <p>Time:10 a.m-12pm</p>

       <button>Purchase Ticket</button>
     </div>

     <div><p>Venue:Kasarani Grounds</p>
       <p>Day:SArtuday</p>
       <p>Time:10 a.m-3pm</p>

       <button>Buy tickets</button></div>
   </MainContainer>
  );
}

export default Main;
