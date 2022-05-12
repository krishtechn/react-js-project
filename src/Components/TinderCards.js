import React, { useState } from 'react'
import "../Header.css";
import Image from "../Components/image/image.jpg";

function TinderCards() {
 const [people,setpeople] = useState([
     {
         name:"Elon Musk",
         url:Image,
     }
 ])

  return (
    <div className='tinderCards'>
            <div className='tinderCards_container'>
        {people.map(items=>{
            return <img src={Image} alt="" className='tinderprofile'/>
        })}
        </div>
    </div>
  )
}

export default TinderCards