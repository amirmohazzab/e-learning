import React, {useEffect} from "react";
import {Link, Navigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import config from '../../services/config.json';
import { isEmpty } from "lodash";  
import {addToBasket, deleteFromBasket, deleteFromBasketMulti, clearBasket, getBasket} from '../../actions/cart';

const UserProfile = () => {

  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getBasket());
}, [cart, dispatch]);

  const addition = (acc, currentvalue) => {
    return acc + currentvalue.productId.price * currentvalue.cartQuantity;
  }

  const total = cart.cartItems.reduce(addition, 0);

  if (isEmpty(user)) return <Navigate to="/" />; 


  return (
    <> 
    <div class="user-account">
      <div class="row">
        <div class="col-md-3 col-sm-4 col-xs-12">
          <aside>
            <div class="avatar-layer">
              <div class="img-layer">
                <a href="" class="change-image">
                  <i class="zmdi zmdi-edit"></i>
                </a>
                <img src="images/avatar.jpg" />
              </div>
              <div class="detail">
                <span> {user.fullname} </span>
              </div>
            </div>

            <section>
              <header>
                <h3> Dashboard </h3>
              </header>
              <div class="inner">
                <ul>
                  <li>
                    <Link to="/logout"> Logout </Link>
                  </li>
                </ul>
              </div>
            </section>
          </aside>
        </div>
        <div class="col-md-9 col-sm-8 col-xs-12">
          <section class="user-account-content">
            <header>
              <h1> Dashboard </h1>
            </header>
            <div class="inner">
              <div class="account-information">
                <h3> Information </h3>
                <ul>
                  <li>
                    {" "}
                    <i class="zmdi zmdi-account"></i> Fullname: {user.fullname}
                  </li>
                  <li>
                    {" "}
                    <i class="zmdi zmdi-assignment-account"></i> User name: {user.email.split('@')[0]}
                  </li>
                  <li>
                    {" "}
                    <i class="zmdi zmdi-email"></i> Email: {user.email}
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="cart">
            {cart?.cartItems.map(product => {
              return(
                    <div
                        key={product.productId._id}
                        className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col cart-item"
                    >
                        <article >
                            <div style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}> 

                                <div > 
                                  <Link
                                      to={`/course/${product.productId._id}`}
                                      className="img-layer"
                                  >
                                      <img
                                          src={`${config.localapi}/${product.productId.imageUrl}`}
                                          style={{width: "220px", height: "150px"}}
                                      />
                                  </Link>
                                </div>
                               
                                <div style={{textAlign: "center", marginLeft: "20px"}}> 
                                    <h2 style={{paddingBottom: "5px"}}>
                                      <Link to={`/course/${product.productId._id}`}>
                                          {product.productId.title}
                                      </Link>
                                    </h2>
                                    {" "}
                                    <h5> {product.productId.price} </h5>
                                </div>
                                     
                                <div style={{marginRight: "200px", marginLeft: "170px", textAlign: "center"}}> 
                                   <div style={{paddingRight: "10px"}}>  
                                    <h5 > sum : {product.productId.price * product.cartQuantity} </h5>
                                    </div>
                                    {" "}
                                      <button onClick={() => dispatch(addToBasket(product.productId._id))}
                                                style={{border: "none", backgroundColor: "green", color: "white"}}
                                      > 
                                          +
                                      </button>
                                      {" "}
                                      <span> {product.cartQuantity} </span>
                                      {" "}
                                      <button onClick={() => {
                                                          if(product.cartQuantity > 1){
                                                            dispatch(deleteFromBasket(product.productId._id))
                                                          }else{
                                                            dispatch(deleteFromBasketMulti(product.productId._id))
                                                          }
                                                        }}
                                                        style={{border: "none", backgroundColor: "green", color: "white"}}
                                      > 
                                        -
                                      </button>
                                </div>

                                <div >   
                                    <button 
                                            onClick={()=> dispatch(deleteFromBasketMulti(product.productId._id))}   
                                                      style={{color: "white", backgroundColor: "green", 
                                                      display: "block", margin: 5}}
                                            > 
                                            delete 
                                    </button>  
                                </div>
                              
                            </div>
                        </article>
                    </div>
              )})
      }
          </section>
        </div>
      </div>
    </div>
    <div className="total" style={{marginTop: 10}}>
      {
        total > 0 ? <p> Sum : {total} </p> : <p> Basket is Empty </p>
        
      }
      <button onClick={() => dispatch(clearBasket())} style={{backgroundColor: "lime", borderColor: "lime"}}>
        Remove Basket
      </button>
    </div>
    </>
  );
};

export default UserProfile;