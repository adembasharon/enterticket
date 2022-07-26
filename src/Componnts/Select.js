import React, { useState } from "react"
import {main , shows} from "../data"
import { Link } from "react-router-dom"
import styled from 'styled-components';
import Nav from "./Nav";
import Footer from './Footer/Footer';

const MainSelect=styled.div`
display:flex;
font-family: 'Playfair Display', serif;


`


const Select=()=>{
const [events,setEvents]=useState(shows)


const handleChange=(e)=>{
const selectedEvent=e.target.value;
const selectedEvents=[];
shows.filter(show=>{
    show.cartegory===selectedEvent&&selectedEvents.push(show);
    setEvents(selectedEvents);
    console.log(selectedEvents)
})
}


    return(
<>
<Nav/>
    <select onChange={handleChange}>
<option value="music">Music</option>
<option value="movie">Movies</option>
    </select>
    {
         events.map(item=>{
    return (
    
        <MainSelect>
 

    <img src={item.img} width={"250"} />
    <h2>{item.title}</h2>
<p>{item.des}</p>
<p>{item.time}</p>
<p>{item.day}</p>
<p>{item.price}</p>

    )
    
</MainSelect>
);
    }
    )
}
    <Footer/>
    </>
    )
 
}
export default Select