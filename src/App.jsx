import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Home from './pages/Home'

const App = () => {
  return (
    <div className='app-main'>

    <BrowserRouter>

    <Routes>
      <Route path='/' element= {< Home />}/>
    </Routes>
    
    </BrowserRouter>

    </div>
  )
}

export default App