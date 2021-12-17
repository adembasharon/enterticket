import styled from "styled-components"





import './App.css';
import Main from './Componnts/Main';
import Show from './Componnts/Shows/Show';
import Footer from './Componnts/Footer/Footer';

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
<Maincontent>
  <Main />
</Maincontent>

      <Showcontainer>
    <Show />
    </Showcontainer>
    <Footercontent>
    <Footer />
    </Footercontent>
    </Appcontent>
  );
};

export default App;
