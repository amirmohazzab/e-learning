import React, {useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Bestlearn from './Bestlearn'
import {ToastContainer} from 'react-toastify'

const App = () => {

  useEffect(() => {
    require("../utils/script");    
  }, []);



  return (
    <BrowserRouter> 
      <Bestlearn/>
      <ToastContainer/>
    </BrowserRouter>    
   
  )
}

export default App
