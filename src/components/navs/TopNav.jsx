import React from "react";
import { NavLink, Link, useLocation} from "react-router-dom";

const TopNav = () => {

  const location = useLocation();

  return (
    <nav>
      <div className="topnav">
        <div className="col-sm-6 col-xs-12">
          <ul>
            <li>
              <NavLink to="/" exact style={{color: location.pathname === "/" ? "lime" : null}}    
              > Main page 
              </NavLink>   
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-xs-12">
          <div className="clientarea">
            <div className="loggein hidden">
              <i className="zmdi zmdi-account"></i>
              <Link to="/user-profile"> Welcome, John Black </Link>
            </div>
            <div className="signin">
              <i className="zmdi zmdi-account"></i>
              <NavLink to="/login" exact style={ ({isActive}) => ({ color: isActive ? "lime" : null}) }
              > Login 
              </NavLink> 
            / <NavLink to="/register" exact style={({isActive}) => ({ color: isActive ? "lime" : null}) }
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
