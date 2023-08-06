import { useContext, FC } from "react";
import Pagination from "./../common/Pagination";
import { adminContext } from "./../context/AdminContext";
import { IAdminContextProps } from "./../../utils/types";

const CourseTable: FC = () => {

  const {
    currentPage,
    perPage,
    handlePageChange,
    courseData,
    openNewCourseDialog,
    openEditCourseDialog,
    openDeleteCourseDialog,
    openImageCourseDialog,
    setSearch,
    filteredCourses,
    sortCoursesAsc,
    sortCoursesDes
  } = useContext<IAdminContextProps>(adminContext);

  return (
    <section style={{ marginTop: "5em", marginLeft: "2em" }}>
      <div>
        <div>
          <h3 className="alert alert-info text-center">Courses List</h3>
          <div className="row inline-block">
            <button
              className="btn btn-primary"
              onClick={openNewCourseDialog}
              style={{ marginLeft: "1em" }}
            >
              <span
                className="fa fa-plus"
                style={{
                  verticalAlign: "middle",
                  marginLeft: ".5em",
                }}
              ></span>
              {" "}
              Add new course
            </button>
            <input
              type="text"
              placeholder="Search"
              onChange={e => setSearch(e.target.value)}
              className="form-control"
              style={{
                width: "35%",
                float: "right",
                marginRight: "12em",
              }}
            />
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col"> title </th>
                <th scope="col"> image </th>
                <th scope="col"> {" "} price(Euro)
                <span
                  className="fa fa-long-arrow-up"
                  style={{ marginRight: "0.5em" }}
                  onClick={sortCoursesAsc}
                ></span>
                <span
                  className="fa fa-long-arrow-down"
                  style={{ marginRight: "0.5em" }}
                  onClick={sortCoursesDes}
                ></span>
                </th>
                <th scope="col">edit</th>
                <th scope="col">delete</th>
              </tr>
            </thead>
            <tbody>
              {courseData.map((course) => (
                <tr key={course._id}>
                  <td>{course.title}</td>
                  <td>
                    <button className="btn btn-info btn-sm" onClick={() => openImageCourseDialog(course)}> {" "}Show Image {" "} </button>
                  </td>
                  <td>{course.price === 0 ? "Free" : `${course.price}`}</td>
                  <td>
                    <button className="btn btn-warning" onClick={() => openEditCourseDialog(course)}> {" "} Edit {" "} </button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => openDeleteCourseDialog(course)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="navbar-fixed-bottom text-center footer">
          <Pagination
            totalCourse={filteredCourses.length}
            currentPage={currentPage}
            perPage={perPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default CourseTable;
