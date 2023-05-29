import React from 'react'
import {FaBars} from 'react-icons/fa';

const ToggleButton = ({openSidebar}) => {

     
     return (
          <button className="sidebar-toggle" onClick={openSidebar}>
               <FaBars />
          </button>
     )
}

export default ToggleButton;