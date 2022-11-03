import React from "react";
import { Link, useLocation } from "react-router-dom";
//import ShowImage from '../common/ShowImage';
import config from '../../services/config.json';


const Course = ({courses}) => {

    const location = useLocation();
    
  return (
    <section className="terms-items">
        {
            location.pathname === "/"  ?
            <header>
                <h2> Latest Bestlearn Courses </h2>
                <Link to="/archive"> All Courses </Link>
            </header> : null
        }
      <div className="row">
      {courses.map(course => (
                    <div
                        key={course._id}
                        className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
                    >
                        <article>
                            <Link
                                to={`/course/${course._id}`}
                                className="img-layer"
                            >
                                <img
                                    src={`${config.localapi}/${course.imageUrl}`}
                                />
                                {/* <ShowImage image={course.imageUrl} /> */}
                            </Link>
                            <h2>
                                <Link to={`/course/${course._id}`}>
                                    {course.title}
                                </Link>
                            </h2>
                            <span>
                                 {
                                    course.price > 0 ? course.price : <span> Free </span>  
                                 }
                            </span>
                        </article>
                    </div>
                ))}
      </div>
    </section>
  );
};

export default Course;
