import React, { useEffect } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Bestlearn from './Bestlearn'

const App = () => {

  useEffect(() => {
    require("../utils/script");
  }, []);



  return (
    <BrowserRouter> 
      <Bestlearn/>
    </BrowserRouter>    
   
  )
}

export default App
