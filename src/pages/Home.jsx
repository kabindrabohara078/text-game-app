import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Input from '../components/Input'
import './Home.css'

const Home = () => {

    const [mode, setMode] = useState(0)  //1 for dark mode and 0 for light mode
    

  return (
    <div className='home-main' 
    style={{
        background: mode ? '#555':'white'
    }}
    >
        
        <Navbar mode={mode} setMode={setMode}/>
        

        <Input mode={mode} setMode={setMode}/>
    </div>
  )
}

export default Home