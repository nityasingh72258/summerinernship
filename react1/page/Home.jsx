import React from 'react'

const Home = () => {
  return (
    <>
      <h1 className="title">👨🏻‍🎓Welcome to ✦ Cyvanata Classes👨🏻‍🎓</h1>

      <div className="card-container">

        <div className="card">
          <h2>🌐 HTML & CSS</h2>
          <p>Learn Website Design from Basics.</p>
          <button>Learn More</button>
        </div>

        <div className="card">
          <h2>⚡ JavaScript</h2>
          <p>Learn JavaScript with Projects.</p>
          <button>Learn More</button>
        </div>

        <div className="card">
          <h2>⚛ React JS</h2>
          <p>Create Modern Web Applications.</p>
          <button>Learn More</button>
        </div>

      </div>
    </>
  
  )
}

export default Home