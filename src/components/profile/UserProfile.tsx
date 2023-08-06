import {FC} from "react";
import {Link, Navigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import config from '../../services/config.json';
import { isEmpty } from "lodash";  
import {BsTrash} from "react-icons/bs";
import { addToBasket, deleteFromBasket, deleteFromBasketMulti, clearBasket, getBasket } from "../../features/cartSlice";
import { IRootState } from "../../utils/types";


const UserProfile: FC = () => {

  const {user} = useSelector((state: IRootState) => state.user);
  const cart = useSelector((state: IRootState) => state.cart);
  const dispatch = useDispatch();
  

  const addition = (acc: number, currentvalue: any) => {
    return acc + currentvalue.productId?.price * currentvalue.cartQuantity;
  }

  const total = cart.cartItems.reduce(addition, 0);

  if (isEmpty(user)) return <Navigate to="/" />; 


  return (
    <> 
    <div className="user-account">
      <div className="row">
        <div className="col-md-3 col-sm-4 col-xs-12">
          <aside>
            <div className="avatar-layer">
              <div className="img-layer">
                <a href="" className="change-image">
                  <i className="zmdi zmdi-edit"></i>
                </a>
                <img src="images/avatar.jpg" alt="Avatar"/>
              </div>
              <div className="detail">
                <span> {user.fullname} </span>
              </div>
            </div>

            <section>
              <header>
                <h3> Dashboard </h3>
              </header>
              <div className="inner">
                <ul>
                  <li>
                    <Link to="/logout"> Logout </Link>
                  </li>
                </ul>
              </div>
            </section>
          </aside>
        </div>
        <div className="col-md-9 col-sm-8 col-xs-12">
          <section className="user-account-content">
            <header>
              <h1> Dashboard </h1>
            </header>
            <div className="inner">
              <div className="account-information">
                <h3> Information </h3>
                <ul>
                  <li>
                    {" "}
                    <i className="zmdi zmdi-account"></i> Fullname: {" "} {user.fullname}
                  </li>
                  <li>
                    {" "}
                    <i className="zmdi zmdi-assignment-account"></i> User name: {user.email.split('@')[0]}
                  </li>
                  <li>
                    {" "}
                    <i className="zmdi zmdi-email"></i> Email: {user.email}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {
          !user.isAdmin && (
          <section className="cart">
          <div className="table-responsive">
                                            <table className="table align-middle">
                                                <thead>
                                                    <tr>
                                                        <th> Product  </th>
                                                        <th> Name </th>
                                                        <th> Price </th>
                                                        <th> Number </th>
                                                        <th> Sum </th>
														                            <th> Action </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
											                           	{cart?.cartItems.map((product: any) => {
                                                    console.log(product);
                                                    return (
                                                        <tr key={product.productId._id}>
                                                            <td>
                                                                <Link
                                                                  to={`/course/${product.productId._id}`}
                                                                  className="img-layer"
                                                                >
                                                                  <img
                                                                    src={`${config.localapi}/${product.productId.imageUrl}`}
                                                                    alt="product.productId.title"
                                                                    style={{width: "220px", height: "150px"}}
                                                                  />
                                                                </Link>
                                                            </td>
                                                            <td className="fw-bold" style={{verticalAlign: "middle"}}>
                                                                <Link to={`/course/${product.productId._id}`}>
                                                                  {product.productId.title}
                                                                </Link>
															                              </td>
															                              <td className="fw-bold" style={{verticalAlign: "middle"}}>{product.productId.price}</td>
                                                            <td style={{verticalAlign: "middle"}}>
                                                                <div>
                                                                    <button onClick={() => dispatch(addToBasket(product.productId._id))} 
                                                                            style={{border: "none", backgroundColor: "green", 
                                                                            color: "white", borderRadius: "3px", width: "20px", fontSize: "15px"}}
                                                                    >
                                                                        +
                                                                    </button>
                                                                    <div style={{width: "20px", textAlign: "center"}}> {" "} {product.cartQuantity} {" "} </div>
                                                                    <button onClick={() => {
                                                                      if(product.cartQuantity > 1) {
                                                                      dispatch(deleteFromBasket(product.productId._id));
                                                                      } else {
                                                                      dispatch(deleteFromBasketMulti(product.productId._id));
                                                                      }}} 
                                                                      style={{border: "none", backgroundColor: "green", 
                                                                               color: "white", borderRadius: "3px", width: "20px", fontSize: "15px"}}
                                                                    >
                                                                        -
                                                                    </button>
                                                                </div>
                                                              </td>
                                                              <td className="fw-bold" style={{verticalAlign: "middle"}}>{product.productId.price * product.cartQuantity} {" "} </td>
                                                              <td style={{verticalAlign: "middle"}}>
                                                                <button 
                                                                  onClick={()=> dispatch(deleteFromBasketMulti(product.productId._id))}   
                                                                        style={{color: "white", backgroundColor: "green", border: "none", 
                                                                        fontSize: "25px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "3px"}}
                                                                  > 
                                                                  <BsTrash/>
                                                                </button>  
                                                            </td>
                                                        </tr>
                                                    )})}
                                                </tbody>
                                            </table>
										                      </div> 

                    <div className="total" style={{marginTop: 10}}>
                      {
                        total > 0 
                        ? 
                        (
                        <> 
                          <p> Sum : {total} </p> 
                          <button onClick={() => dispatch(clearBasket())} style={{backgroundColor: "lime", borderColor: "lime"}}>
                            Remove Basket
                          </button>
                        </>
                       ) : (
                        <p> Basket is Empty </p>
                        )
                      }
                    </div>
          </section>
          )}

        </div>
      </div>
    </div>
    </>
  );
};

export default UserProfile;