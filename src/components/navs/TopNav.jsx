import React from "react";
import {isEmpty} from 'lodash';
import { NavLink, useLocation, Link} from "react-router-dom";
import {FaShoppingBasket} from "react-icons/fa";
import { useSelector } from 'react-redux';
// import {getBasket} from '../../actions/cart';
import { getBasket } from "../../features/cartSlice";

const TopNav = () => {

  const {user} = useSelector(state => state.user);
  const cart = useSelector(state => state.cart);

  // const dispatch = useDispatch();

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

                  { !user.isAdmin &&
                  
                      <Link to="/cart">
                          <div className="right-nav">
                            <FaShoppingBasket style={{width: 20, height: 13}}/>
                            <span className="notif">{cart.totalQTY}</span>
                          </div>
                      </Link>
                  }

                   {"  "}
          
                  {"  "}
                  <NavLink to="/user-profile" style={({isActive}) => ({ color: isActive ? "lime" : null})}> {user?.fullname} </NavLink>
                  {"  "}
          
                  {"  "}
                 
                  {user.isAdmin && <NavLink to="/dashboard"> / Admin Panel </NavLink>  }
                    {"  "}
                    
                    {"  "}
                    
                  <NavLink to="/logout"> / logout </NavLink>
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