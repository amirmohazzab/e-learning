import {FC} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Bestlearn from './Bestlearn'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App: FC = () => {

  return (
    <BrowserRouter> 
      <Bestlearn/>
      <ToastContainer/>
    </BrowserRouter>    
   
  )
}

export default App
