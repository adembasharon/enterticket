import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const Timer=styled.div`
display:flex;
flex-direction:column;
position:absolute;
color:white;
top:50%;
margin-left:6em;
left:10;
transform:translateY(-50%);
font-weight:900;


`

const Days=styled.div`
display:flex;
font-family: 'Playfair Display', serif;
text-align:center;
flex-direction:column;
font-weight:900;
color:####;
padding:1.4em;
font-size:4rem
border-radius:5px;
border:1px solid white;
margin:2em 0;

`
const Maindays=styled.div`
display:flex;
gap:2em;

`

const Btn=styled.button`
padding:1em 2em;
color:white;
border-radius:5px;
border:1px solid white;
background-color:#131F2A;
`
const Links=styled.a`
text-decoration:none;
color:white;
font-weight:900;

`
const Paragraph=styled.p`
font-Weight:600;
font-size:3rem;
`


const CountDownTimer = ()=>{
 const [timer, setTimer] = useState({});
useEffect(()=>{
    setInterval(()=>{
        countdownClock()
    })
}, 1000)


    const countdownClock= ()=>{
    const showDate = new Date('2 Dec 2022');

const todaysDate = new Date();

const dateDiff=(showDate-todaysDate);

const days = Math.floor(dateDiff/(1000*60*60*24));
const hours = Math.floor(dateDiff/(1000*60*60));
const minutes = Math.floor(dateDiff/(1000*60));
const seconds = Math.floor(dateDiff/1000);

 const d = days;
 const h = hours - days * 24;
 const m = minutes - hours * 60;
 const s = seconds - minutes * 60;



 setTimer({
     d,
     h,
     m,
     s
 })
    }

   console.log(timer)

    return (
        <Timer>
            <div>
            <Paragraph> The Show is Coming !</Paragraph>
            </div>
            <div>
                <Maindays>
            <Days>
            <div>
                <p>DAYS</p>
            </div>
            <div>
                <p>{timer.d}</p>
            </div>
            </Days>

            <Days>
            <div>
                <p>HRS</p>
            </div>
            <div>
                <p>{timer.h}</p>
            </div>
            </Days>

            <Days>
            <div>
                <p>MIN</p>
            </div>
            <div>
                <p>{timer.m}</p>
            </div>
            </Days>

            <Days>
            <div>
                <p>SEC</p>
            </div>
            <div>
                <p>{timer.s}</p>
            </div>
            </Days>
            </Maindays>
            </div>
            <div>
            <Btn><Links href="#">Ready To Enjoy ?</Links></Btn>
            </div>
        </Timer>
    )
}

export default CountDownTimer;
