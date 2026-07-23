import React from 'react'
import { useState } from 'react';

const Count = () => {
    const [count,setCount]= useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <div >
            <button onClick={()=>setCount(count+1)}>increment</button>
            <button onClick={()=>setCount(count-1)}>dicrement</button>
        </div>
        
    </div>
  );
};

export default Count;