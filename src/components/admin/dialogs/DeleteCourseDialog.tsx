import Modal from "react-modal";
import {FC} from "react";

import { useDispatch } from "react-redux";
import { handleCourseDelete } from '../../../features/coursesSlice';
import { ICourse } from "../../../utils/types";
import { modalContent, modalOverlay } from "./modalStyle";


interface IProps {
    showDialog: boolean;
    closeDialog: () => void;
    course: ICourse;
}

const DeleteCourseDialog: FC<IProps> = ({ showDialog, closeDialog, course }) => {

    const dispatch = useDispatch();

    return (
        <Modal
            isOpen={showDialog}
            onRequestClose={closeDialog}
            style={{
                content: modalContent,
                overlay: modalOverlay,
            }}
        >
                <div className="card text-center">
                    <h3 style={{ fontSize: "2rem" }}> delete {course.title} course </h3>
                    <hr />
                    <p> Are you sure to delete {course.title} course? </p>
                </div>

                <div className="text-center">
                    <button
                        className="btn btn-danger "
                        style={{ margin: "1em" }}
                        onClick={() =>
                            dispatch(handleCourseDelete(course._id)) && closeDialog()}
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
        </Modal>
    );
};

export default DeleteCourseDialog;
