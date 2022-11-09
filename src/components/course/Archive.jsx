import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { paginate } from "./../../utils/paginate";
import Pagination from "./../common/Pagination";
import Course from "./Course";
import { orderBy } from "lodash";

const Archive = () => {
  const [perPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [courseList, setCourseList] = useState([]);
  const [sort, setSort] = useState("");
  

  const courses = useSelector((state) => state.courses);
  useEffect(() => setCourseList(courses), [courses]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const sortedPrice = (event)=> {

    setSort(event.target.value);
   
    if(sort === "asc"){
      setCourseList([]);
      setCourseList(orderBy(courseList, "price", "asc"));
      return;
    }
    if(sort === 'desc'){
      setCourseList([]);
      setCourseList(orderBy(courseList, "price", "desc"));
      return;
    }
  }


  const filterItems = model => {

    if (model === "All"){
      setCourseList([]);
      setCourseList(courses);
      return
    }
    if (model === "Buy") {
      setCourseList([]);
      const newItems = courses.filter((item) => item.price > Number.parseInt(0));
      setCourseList(newItems);
      return;
    }
    if (model === "Free") {
      setCourseList([]);
      const newItems = courses.filter((item) => item.price === Number.parseInt(0));
      setCourseList(newItems);
      return;
    }
  }


  


  const filteredShowCourses = courseList.filter((course) => course.title.toLowerCase().includes(search.toLowerCase()));
  
  const archiveCourses = paginate(filteredShowCourses, currentPage, perPage);

  console.log(courseList, "courseList");

  return (
    <section className="term-categories">
      <div className="top-bar">
        <header>
          <h1>
            {" "}
            <span> Programming </span> Courses {" "}
          </h1>
          <span> course numbers {courses.length} </span>
        </header>

        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12 pull-right">
            <form action="" method="">
              <div className="input">
                <input 
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder=" Subject ... " 
                  aria-describedby="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button>
                  <i className="zmdi zmdi-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="switch-field available">

              <input
                id="available-filter-1"
                name="available"
                value="Free"
                type="radio"
                onClick={(e)=> filterItems(e.target.value)}
              />
              <label for="available-filter-1"> Free </label>

              <input
                id="available-filter-2"
                name="available"
                value="Buy"
                type="radio"
                onClick={(e)=> filterItems(e.target.value)}
              />
              <label for="available-filter-2"> Buy </label>

              <input
                id="available-filter-3"
                name="available"
                value="All"
                type="radio"
                onClick={(e)=> filterItems(e.target.value)}
              />
              <label for="available-filter-3"> All </label>

            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 pull-left">
            <div className="select-ddl">
              <select value={sort} onChange={sortedPrice}>
                <option value="desc"> price(asc) </option>
                <option value="asc"> price(desc) </option>
              </select>
            </div>
          </div>
        </div>
      </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <section className="terms-items pl-6">
              <div className="row">
                <Course courses={archiveCourses} />
              </div>
              <Pagination
                totalCourse={search ? filteredShowCourses.length : courseList.length}
                currentPage={currentPage}
                perPage={perPage}
                onPageChange={handlePageChange}
              />
            </section>
          </div>
        </div>
    </section>
  );
};

export default Archive;
