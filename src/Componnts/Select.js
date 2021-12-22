import React, { useState } from "react"
import {main , shows} from "../data"
import { Link } from "react-router-dom"

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
    <select onChange={handleChange}>
<option value="music">Music</option>
<option value="movie">Movies</option>
    </select>
    {
         shows.map(item=>{
    return (
    
        <div>
 

    <img src={item.img} width={"250"} />
    <h2>{item.title}</h2>
<p>{item.des}</p>
<p>{item.time}</p>
<p>{item.day}</p>


    )
    
</div>
);
    }
    )
}
    
    </>
    )
 
}
export default Select