import { FaCartPlus } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import config from '../../services/config.json';
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import {useSelector} from 'react-redux';

const ButtonBasket = ({ handleSubmit, isClicked, course }) => {

    // course.quantity = 1;
    const {user} = useSelector(state => state.user);
  console.log(user);

  return (
    <div
    className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
>
    <article>
        <Link
            to={`/course/${course._id}`}
            className="img-layer"
        >
            <img
                src={`${config.localapi}/${course.imageUrl}`}
                alt={course.title}
                style={{width: "380px", height: "160px"}}
            />
        </Link>
        <h2>
            <Link to={`/course/${course._id}`}>
                {course.title}
            </Link>
        </h2>
        <span>
            {course.price}
            {
            !user?.isAdmin && 
            <button id={course._id}
                onClick={handleSubmit}
                className="pull-right"
                style={{
                    border: "none",
                    backgroundColor: "green",
                    color: "white",
                    width: 35,
                    height: 25,
                }}
                >
                {!isEmpty(user) && !user.isAdmin && isClicked ? (
                    <BsCheckLg
                    style={{
                        cursor: "pointer",
                        color: "white",
                        backgroundColor: "green",
                    }}
                    className="fa-lg"
                    />
                ) : (
                    <FaCartPlus style={{ cursor: "pointer" }} className="fa-lg" />
                )}
            </button>
            }

        </span>
    </article>
</div>
  );
};

export default ButtonBasket;
