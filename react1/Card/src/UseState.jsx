import React from 'react'
import { useState } from 'react'
const UseState = () => {
    const [color,setColor]=useState("blue")
  return (
    <div>
        <button type='button' onClick={()=>setColor("yellow")}>
            Change Color
        </button>
        <h1>My favourite color is:{color}</h1>
    </div>
 
   
  )
}

export default UseState