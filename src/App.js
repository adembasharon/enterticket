import styled from "styled-components"
import {PDFViewer} from "@react-pdf/renderer";

import React from "react";
import {HashRouter as Router, Routes, Route} from "react-router-dom";

// import Login from './Componnts/Login';
import HomePage from "./Componnts/HomePage";
import Login from './Componnts/Login'
import Signup from './Componnts/Singup'
import Select from "./Componnts/Select"
import './App.css';
import Allshow from "./Componnts/Allshow";
// import Main from './Componnts/Main';
// import Show from './Componnts/Shows/Show';
//  import Footer from './Componnts/Footer/Footer';


 const Maincontent=styled.div`
display:flex;
justify-content:space-between;
margin:0 auto;
`


//  const Appcontent=styled.div`



// const Showcontainer=styled.div`
// display:flex;
// flex-direction:row;
// flex-wrap:wrap;
// width:100%;
// justify-content:center;
//  align-items:center;
// text-align:center;

// `
// const Footercontent=styled.div`
// margin-top:3em;

// `

// const Appcontent=styled.div`

// `

// const Category1content=styled.div``

function App() {
  return (

< >
    <Router>
<Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/Signup" element={<Signup/>} />
<Route path="/Allshow" element={<Allshow/>} />
<Route path="/Select" element={<Select/>}/>
</Routes>
    </Router>
   
   
    </>
  )
};

export default App;
