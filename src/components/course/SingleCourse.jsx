import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { getSingleCourse } from './../../actions/course';
import { courseIdValidator } from './../../utils/IdValidator';
import config from '../../services/config.json'

const SingleCourse = () => {

    const course = useSelector(state => state.course);
    const dispatch = useDispatch();

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
                <img src={`${config.localapi}/${course.imageUrl}`}/>
                <p>{course.info}</p>
            </section>
        </div>

        <aside class="col-md-4 col-sm-12 col-xs-12 pull-left">

            <article class="teacher-info">
                <img src="../images/pic/avatar.jpg"/>
                <h2> teacher: john black</h2>
            </article>

            <article class="term-info">
                <h2> Course info </h2>
                <ul>
                    <li> level: Advanced </li>
                    <li> price: {course.price} </li>
                </ul>
            </article>
        </aside>
    </div>
</section>
  )
}

export default SingleCourse
