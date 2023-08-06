import {FC} from "react";
import { isEmpty } from "lodash";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';

import ButtonBasket from './ButtonBasket';
import { addToBasket } from "../../features/cartSlice";
import { ICourseProps, IRootState } from "../../utils/types";


const Course: FC<ICourseProps> = ({courses}) => {

    const {user} = useSelector((state: IRootState) => state.user);
    const cart = useSelector((state: IRootState) => state.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (item: {_id: string}) => {
        if (!isEmpty(user)) {
            dispatch(addToBasket(item._id));
        }else{
            navigate("/login", {replace: true});
        }
    };
	

  return (
    <section className="terms-items">
        {
            location.pathname === "/"  ? (
            <header>
                <h2> Latest Bestlearn Courses </h2>
                <Link to="/archive"> <h2 style={{color: "limegreen"}}> All Courses </h2> </Link>
            </header> ) : null
        }
        <div className="row">
        {courses.map(c => 
                <ButtonBasket 
                    key={c._id}
                    handleSubmit={() => handleSubmit(c)}
                    isClicked={ !isEmpty(user) && !user.isAdmin && cart?.cartItems && cart?.cartItems.some(cp => cp.productId?._id === c._id)} 
                    course={c} 
                /> 
        )}
      </div>
    </section>
  );
};

export default Course;
