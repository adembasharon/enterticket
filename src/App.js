import styled from "styled-components"
import {PDFViewer} from "@react-pdf/renderer";

import React from "react";

import Login from './Componnts/Login';

import './App.css';
import myDocuments from './Componnts/myDocuments';


import Main from './Componnts/Main';
// import Show from './Componnts/Shows/Show';
 import Footer from './Componnts/Footer/Footer';


const Maincontent=styled.div`
display:flex;
justify-content:space-between;
margin:0 auto;



`



const Showcontainer=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
width:100%;
justify-content:center;
 align-items:center;
text-align:center;

`
const Footercontent=styled.div`
margin-top:3em;

`

const Appcontent=styled.div`

`

const Category1content=styled.div``

function App() {
  return (

< >
    
    <Appcontent>
<Maincontent>
  <Main />
</Maincontent>

<Category1content>
  
  </Category1content>
      {/* <Showcontainer>
    <Show />
    </Showcontainer> */}
    
    <Footercontent>
    <Footer />
    </Footercontent>
    
    </Appcontent>

    <PDFViewer>
<myDocuments/>
</PDFViewer>
    </>
  )
};

export default App;
