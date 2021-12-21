 import styled from "styled-components";
 import './App.css';
  import Nav from './Componnts/Nav';
  import Allshow from './Componnts/Allshow';

  import News from './Componnts/News';
  import Select from './Componnts/Select';
 import Slider from './Componnts/Slider';
 import Singup from "./Componnts/Singup"
 import Login from './Componnts/Login';
  import Footer from './Componnts/Footer/Footer';
  import Main from "./Componnts/Main";
  const Maincontent=styled.div`

  `



  const Showcontainer=styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  width:100%;

 `
 const Footercontent=styled.div`
 margin-top:3em;

 `

 const Appcontent=styled.div`

 `

function App() {
  return (
    
    <Appcontent>
       <Nav/>
<Slider/>
<Select />
<Main/>
<Allshow/>
     <Showcontainer>
    
  </Showcontainer>
 <News/>
 <Login /> 
  <Singup/>
      <Footercontent>
     <Footer />
     </Footercontent>
    </Appcontent>

  );
};

export default App;
