import React from "react";
import { NavLink} from "react-router-dom";

const TopNav = () => {

  

  return (
    <nav>
      <div className="topnav">
        <div className="col-sm-6 col-xs-12">
          <ul>
            <li>
              <NavLink to="/"    
              > Main page 
              </NavLink>   
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-xs-12">
          <div className="clientarea">
              
                <div className="loggein hidden">
              <i className="zmdi zmdi-account"></i>
              <NavLink to="/user-profile"> </NavLink>
              /
              <NavLink to="#"> logout </NavLink>
            </div>
             
                <div className="signin">
                <i className="zmdi zmdi-account"></i>
                <NavLink to="/login" 
                > Login 
                </NavLink> 
              / <NavLink to="/register" 
                > Register 
                </NavLink>
              </div>
             
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
