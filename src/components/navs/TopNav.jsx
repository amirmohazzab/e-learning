import React from "react";
import {isEmpty} from 'lodash';
import { NavLink, useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';

const TopNav = () => {

  const user = useSelector(state => state.user);
  const location = useLocation();


  return (
    <nav>
      <div className="topnav">
        <div className="col-sm-6 col-xs-12">
          <ul>
            <li>
              <NavLink to="/" exact style={{color: location.pathname === "/" ? "lime" : null}} > 
                Main page 
              </NavLink>   
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-xs-12">
          <div className="clientarea">
            {
              !isEmpty(user) ? (

                <div className="loggein">
                  <i className="zmdi zmdi-account"></i>
                  <NavLink to="/user-profile"> {user.fullname} </NavLink>
                  {"  "}
                    /
                    {"  "}
                  <NavLink to="/logout"> logout </NavLink>
                </div>
              ) : (
                <div className="signin">
                  <i className="zmdi zmdi-account"></i>
                  <NavLink to="/login" style={({isActive}) => ({ color: isActive ? "lime" : null})}> Login </NavLink> 
                  {"  "}
                      / 
                      {"  "}
                  <NavLink to="/register" style={({isActive}) => ({ color: isActive ? "lime" : null})}> Register </NavLink>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
