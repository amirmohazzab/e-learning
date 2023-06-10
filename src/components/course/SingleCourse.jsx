import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Navigate} from 'react-router-dom';
import { getSingleCourse } from './../../actions/course';
import { courseIdValidator } from './../../utils/IdValidator';
import config from '../../services/config.json';
import { isEmpty } from "lodash";
import {addToBasket} from '../../actions/cart';

const SingleCourse = () => {

    const [isClicked, setIsClicked] = useState(false);

    const course = useSelector(state => state.course);
    course.quantity=1;
    
    const user = useSelector(state => state.user);
    console.log(user);
    
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(() => {
        if(courseIdValidator(id))
            dispatch(getSingleCourse(id));
    },[]);

    if(!courseIdValidator(id)) return <Navigate to="/404" />;

    
  return (
    <section class="term-content">

    <header>
        <h1> {course.title} </h1>
    </header>

    <div class="row">

        <div class="col-md-8 col-sm-12 col-xs-12 pull-right">
            <section class="term-description">
                <img 
                    src={`${config.localapi}/${course.imageUrl}`}
                    style={{width: "800px", height: "390px"}}
                    className="image-fluid"
                />
                <p>{course.info}</p>
            </section>
        </div>

        <aside class="col-md-4 col-sm-12 col-xs-12 pull-left">

            <article class="teacher-info">
                <img src="../images/avatar.jpg"/>
                <h2> teacher: john black</h2>
            </article>

            <article class="term-info">
                <h2> Course info </h2>
                <ul>
                    <li> category: {course.category} </li>
                    <li> price: {course.price} </li>
                </ul>
            </article>

            <article>   
                <button 
                    onClick={()=> {
                        if(!isEmpty(user) && !user.isAdmin)  {
                            dispatch(addToBasket(course._id));
                            setIsClicked(true);
                    } else {
                        navigate("/login", {replace: true})
                    }}}
                    style={{backgroundColor: "green", color: "white", width: "100%", height: 35}}
                >
                    { !isEmpty(user) && !user.isAdmin && cart?.cartItems.some(cp => cp.productId._id === course._id) ? "Added" : "Add to Basket" }
                </button>
            </article>

        </aside>
    </div>
</section>
  )
}

export default SingleCourse
