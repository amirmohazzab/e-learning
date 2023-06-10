import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { isEmpty } from "lodash";
import ButtonBasket from './ButtonBasket';
import {addToBasket} from '../../actions/cart';


const Course = ({courses}) => {

    const user = useSelector(state => state.user);
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (item) => {
        if (!isEmpty(user)) {
            dispatch(addToBasket(item._id));
        }else{
            navigate("/login", {replace: true});
        }
    };
	

  return (
    <section className="terms-items">
        {
            location.pathname === "/"  ?
            <header>
                <h2> Latest Bestlearn Courses </h2>
                <Link to="/archive"> <h2 style={{color: "limegreen"}}> All Courses </h2> </Link>
            </header> : null
        }
        <div className="row">
        {courses.map(c => 
                <ButtonBasket 
                    user={user}
                    key={c._id}
                    handleSubmit={() => handleSubmit(c)}
                    isClicked={ !isEmpty(user) && !user.isAmin && cart?.cartItems && cart?.cartItems.some(cp => cp.productId._id === c._id)} 
                    course={c} 
                /> 
        )}
      </div>
    </section>
  );
};

export default Course;
