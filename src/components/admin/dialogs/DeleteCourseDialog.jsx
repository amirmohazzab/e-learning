import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { useDispatch } from "react-redux";
// import { handleCourseDelete } from "./../../../actions/courses";
import { handleCourseDelete } from '../../../features/coursesSlice';

const DeleteCourseDialog = ({ showDialog, closeDialog, course }) => {
    const dispatch = useDispatch();

    return (
        <DialogOverlay
            isOpen={showDialog}
            onDismiss={closeDialog}
            style={{ background: "hsla(0, 100%, 100%, 0.9)" }}
        >
            <DialogContent
                style={{
                    border: "solid 5px hsla(0, 0%, 0%, 0.5)",
                    borderRadius: "10px",
                    boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
                }}
            >
                <div className="card text-center">
                    <h3 style={{ fontSize: "2rem" }}>
                          delete {course.title} course
                    </h3>
                    <hr />
                    <p> Are you sure delete {course.title} course? </p>
                </div>

                <div className="text-center">
                    <button
                        className="btn btn-danger "
                        style={{ margin: "1em" }}
                        onClick={() =>
                            dispatch(handleCourseDelete(course._id)) &&
                            closeDialog()
                        }
                    >
                        I am sure
                    </button>
                    <button
                        className="btn btn-warning mr-5"
                        style={{ margin: "1em" }}
                        onClick={closeDialog}
                    >
                        Cancel
                    </button>
                </div>
            </DialogContent>
        </DialogOverlay>
    );
};

export default DeleteCourseDialog;
