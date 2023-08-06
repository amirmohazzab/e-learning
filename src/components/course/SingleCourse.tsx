import {useEffect, useState, FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Navigate} from 'react-router-dom';
import { courseIdValidator } from './../../utils/IdValidator';
import { isEmpty } from "lodash";

import config from '../../services/config.json';
import { getSingleCourse } from './../../features/courseSlice';
import { addToBasket } from '../../features/cartSlice';
import { IRootState } from "../../utils/types";

const SingleCourse: FC = () => {

    const [isClicked, setIsClicked] = useState(false);

    const {course} = useSelector((state: IRootState) => state.course);
    const {user} = useSelector((state: IRootState) => state.user);    
    const cart = useSelector((state: IRootState) => state.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(course);


    useEffect(() => {
        if (courseIdValidator(id ?? "")) dispatch(getSingleCourse(id));
    }, [dispatch, id]);

    if(!courseIdValidator(id ?? "")) return <Navigate to="/404" />;

    
  return (
    <section className="term-content">

    <header>
        <h1> {course.title} </h1>
    </header>

    <div className="row">

        <div className="col-md-8 col-sm-12 col-xs-12 pull-right">
            <section className="term-description">
                <img 
                    src={`${config.localapi}/${course.imageUrl}`}
                    style={{width: "800px", height: "390px"}}
                    className="image-fluid"
                />
                <p>{course.info}</p>
            </section>
        </div>

        <aside className="col-md-4 col-sm-12 col-xs-12 pull-left">

            <article className="teacher-info">
                <img src="../images/avatar.jpg" alt="teacher"/>
                <h2> teacher: john black</h2>
            </article>

            <article className="term-info">
                <h2> Course info </h2>
                <ul>
                    <li> category: {course.category} </li>
                    <li> price: {course.price} </li>
                </ul>
            </article>

            <article> 
                {!user.isAdmin &&  
                (<button 
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
                )}
            </article>
        </aside>
    </div>
</section>
  )
}

export default SingleCourse
