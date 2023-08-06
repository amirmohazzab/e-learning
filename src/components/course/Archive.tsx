import { useState, useEffect, FC, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { orderBy } from "lodash";

import { paginate } from "./../../utils/paginate";
import Pagination from "./../common/Pagination";
import Course from "./Course";
import { IRootState } from "../../utils/types";


const Archive: FC = () => {
  const [perPage] = useState<number>(4);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [courseList, setCourseList] = useState<any[]>([]);
  const [filterdCourse, setFilteredCourse] = useState<any[]>([]);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("All");

  const {courses} = useSelector((state: IRootState) => state.courses);
  useEffect(() => setCourseList(courses), [courses]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const sortedPrice = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = event.target.value;
    setSort(selectedSort);

    if (selectedSort === "asc") {
      setCourseList(orderBy(courseList, "price", "asc"));
    }
    if (selectedSort === "desc") {
      setCourseList(orderBy(courseList, "price", "desc"));
    }
  };

  const filterItems = (model: string) => {
    if (model === "All") {
      setCourseList(courses);
    }
    if (model === "Buy") {
      const newItems = courses.filter((item) => item.price > 0);
      setCourseList(newItems);
    }
    if (model === "Free") {
      const newItems = courses.filter((item) => item.price === 0);
      setCourseList(newItems);
    }
  };

  const setCat = (event: ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    
    setCurrentPage(1);
    setSearch("");

    if (category !== "All") {
      setFilteredCourse(
        courseList.filter((course) => course.category === category)
      );
    } else {
      setFilteredCourse(courseList);
    }
  }, [category, courseList]);

  let filteredShowCourses = courseList.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (search.trim().length) {
      setFilteredCourse((prev) =>
        prev.filter((course) =>
          course.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredCourse(courseList);
    }
  }, [search, courseList]);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  let archiveCourses = paginate(filteredShowCourses, currentPage, perPage);

  if (filterdCourse.length || category !== "All" || search.trim().length) {
    archiveCourses = paginate(filterdCourse, currentPage, perPage);
  }

  return (
    <section className="term-categories">
      <div className="top-bar">
        <header>
          <h1>
            <span> Programming </span> Courses
          </h1>
          <span> course numbers {courses.length} </span>
        </header>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 pull-right">
            <form action="" method="">
              <div className="input">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder=" Subject ... "
                  aria-describedby="search"
                  value={search}
                  onChange={searchHandler}
                />
                <button>
                  <i className="zmdi zmdi-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="switch-field available">
              <input
                id="available-filter-1"
                name="available"
                value="Free"
                type="radio"
                onClick={(e) => filterItems("Free")}
              />
              <label htmlFor="available-filter-1"> Free </label>

              <input
                id="available-filter-2"
                name="available"
                value="Buy"
                type="radio"
                onClick={(e) => filterItems("Buy")}
              />
              <label htmlFor="available-filter-2"> Buy </label>

              <input
                id="available-filter-3"
                name="available"
                value="All"
                type="radio"
                onClick={(e) => filterItems("All")}
              />
              <label htmlFor="available-filter-3"> All </label>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 pull-left">
            <div className="select-ddl">
              <select value={sort} onChange={sortedPrice}>
                <option value=""> price </option>
                <option value="desc"> asc </option>
                <option value="asc"> desc </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
          <section className="aside-section filter-by-category">
            <header>
              <h3> Categories </h3>
            </header>
            <div className="inner">
              <div style={{ marginLeft: "15px" }}>
                <div className="form-checkbox">
                  <div className="form-group">
                    <input
                      id="All"
                      type="radio"
                      value="All"
                      name="radiovalues"
                      onChange={setCat}
                    />
                    <label htmlFor="All"> All </label>
                  </div>
                  <div className="form-group">
                    <input
                      id="Mobile"
                      type="radio"
                      value="Mobile"
                      name="radiovalues"
                      onChange={setCat}
                    />{" "}
                    <label htmlFor="Mobile"> Mobile </label>
                  </div>
                  <div className="form-group">
                    <input
                      id="Web"
                      type="radio"
                      value="Web"
                      name="radiovalues"
                      onChange={setCat}
                    />{" "}
                    <label htmlFor="Web"> Web</label>
                  </div>
                  <div className="form-group">
                    <input
                      id="Desktop"
                      type="radio"
                      value="Desktop"
                      name="radiovalues"
                      onChange={setCat}
                    />{" "}
                    <label htmlFor="Desktop"> Desktop </label>
                  </div>
                  <div className="form-group">
                    <input
                      id="Design"
                      type="radio"
                      value="Design"
                      name="radiovalues"
                      onChange={setCat}
                    />{" "}
                    <label htmlFor="Design"> Design </label>
                  </div>
                  <div className="form-group">
                    <input
                      id="Database"
                      type="radio"
                      value="Database"
                      name="radiovalues"
                      onChange={setCat}
                    />{" "}
                    <label htmlFor="Database"> Database </label>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-xs-9 col-sm-9 col-md-10 col-lg-10">
          <section className="terms-items pl-6">
            <div className="row">
              <Course courses={archiveCourses} />
            </div>
            <Pagination
              totalCourse={
                search
                  ? filteredShowCourses.length
                  : category !== "All"
                  ? filterdCourse.length
                  : courseList.length
              }
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
