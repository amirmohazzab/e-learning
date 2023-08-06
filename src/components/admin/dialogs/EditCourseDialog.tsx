import Modal from "react-modal";
import { useEffect, useState, useContext, FC, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { handleCourseUpdate } from "../../../features/coursesSlice";
import { getAllCourses } from "../../../features/coursesSlice";
import { adminContext } from "../../context/AdminContext";
import { IAdminContextProps, ICourse } from "../../../utils/types";
import { modalContent, modalOverlay } from "./modalStyle";

interface IProps {
  showDialog: boolean;
  closeDialog: () => void;
  course: ICourse;
}

const EditCourseDialog: FC<IProps> = ({ showDialog, closeDialog, course }) => {
    const [courseId, setCourseId] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<string | number>("");
    const [imageUrl, setImageUrl] = useState<string | undefined>("");
    const [category,setCategory] = useState<string | undefined>("");
    const [info, setInfo] = useState<string | undefined>("");


    const dispatch = useDispatch();

    const { categories } = useContext<IAdminContextProps>(adminContext);
    
    useEffect(() => {
        setCourseId(course._id);
        setTitle(course.title);
        setPrice(course.price);
        setImageUrl(course.imageUrl);
        setCategory(course.category);
        setInfo(course.info);

        return () => {
            setCourseId("");
            setTitle("");
            setPrice("");
            setImageUrl("");
            setCategory("");
            setInfo("");
        };
    }, [course]);

    const handleSubmit = (event: FormEvent | any) => {
        event.preventDefault();
        let data = new FormData();
        data.append("title", title);
        data.append("price", String(price));
        if (event.target.imageUrl.files[0])
            data.append("imageUrl", event.target.imageUrl.files[0]);
        else data.append("imageUrl", imageUrl ?? "");
        data.append("category", category ?? "");
        data.append("info", info ?? "");

        dispatch(handleCourseUpdate({courseId, data}))
            .then(() => {
                dispatch(getAllCourses());
            })
            .catch((err: Error) => console.log(err));
        closeDialog();
        closeDialog();
    };


    return (
        <Modal
            isOpen={showDialog}
            onRequestClose={closeDialog}
            style={{
              content: modalContent,
              overlay: modalOverlay,
            }}
        >
                <div className="inner form-layer">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            style={{ marginBottom: 3 }}
                            className="form-control"
                            placeholder="title"
                            aria-describedby="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <input
                            type="text"
                            name="price"
                            style={{ marginBottom: 3 }}
                            className="form-control"
                            placeholder="price"
                            aria-describedby="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />

                        <input
                            type="file"
                            name="imageUrl"
                            style={{ marginBottom: 3 }}
                            className="form-control mb-2"
                            aria-describedby="imageUrl"
                        />

                        <div className="mb-2">
                          <select value={category} 
                            className="form-control mb-2" 
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            <option value=""> Select Category </option>
                            {categories.map(category => (
                                <option key={category.id} value={category.name}>
                                  {category.name}
                                </option>
                              ))
                            }
                          </select>
                        </div>

                        <textarea
                            name="info"
                            placeholder="info"
                            className="form-control"
                            style={{ marginBottom: 3 }}
                            value={info}
                            onChange={(e) => setInfo(e.target.value)}
                        />

                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-success"
                            style={{ margin: "1em" }}
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-warning mr-5"
                            style={{ margin: "1em" }}
                            onClick={closeDialog}
                        >
                            Cancel
                        </button>
                    </div>
                    </form>
                </div>
        </Modal>
    );
};

export default EditCourseDialog;
