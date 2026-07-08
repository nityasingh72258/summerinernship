import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="Container">
        <img src={props.img} alt="" />
        <h1>{props.name}</h1>
        <p>hello i am Nitya Singh from Gauri Bazar.</p>
        <p>join: {props.jd}</p>
        <button>View More</button>
        </div>  
    </>
  )
}

export default Card