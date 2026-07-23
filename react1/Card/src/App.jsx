import React from 'react'
import Home from '../../page/Home'
import About from '../../page/About'
import Service from '../../page/Service'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        

    </Routes>

    </BrowserRouter>
    
    
  )
}

export default App