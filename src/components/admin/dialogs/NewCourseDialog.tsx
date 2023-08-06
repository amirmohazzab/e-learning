import Modal from "react-modal";
import { useState, useContext, FC, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { createNewCourse } from "../../../features/coursesSlice";
import { adminContext } from "../../context/AdminContext";
import { modalContent, modalOverlay } from "./modalStyle";

interface IProps {
  showDialog: boolean;
  closeDialog: () => void;
}


const NewCourseDialog: FC<IProps> = ({ showDialog, closeDialog }) => {
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<boolean>(false);
    const [category, setCategory] = useState<string>("");
    const [info, setInfo] = useState<string>("");
    const [ ,forceUpdate] = useState<number>(0);


    const dispatch = useDispatch();

    const {validator, categories} = useContext(adminContext);

    const handleSubmit = (event: FormEvent | any) => {
        event.preventDefault();

        try {
            if (validator?.current?.allValid() ) {
                let data = new FormData();
                data.append("title", title);
                data.append("price", price);
                data.append("imageUrl", event.target.imageUrl.files[0]);
                data.append("category", category);
                data.append("info", info);

                dispatch(createNewCourse(data));

                setTitle("");
                setPrice("");
                setImageUrl(false);
                setCategory("");
                setInfo("");
                closeDialog();
               
            } else {
                validator?.current?.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            console.log(ex);
        }
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
                            onChange={(e) => {
                                setTitle(e.target.value);
                                validator?.current?.showMessageFor("title")
                            }}
                        />
                        {validator?.current?.message("title", title, "required|min:5")}


                        <input
                            type="text"
                            name="price"
                            style={{ marginBottom: 3 }}
                            className="form-control"
                            placeholder="price"
                            aria-describedby="price"
                            value={price}
                            onChange={(e) => {
                                setPrice(e.target.value);
                                validator?.current?.showMessageFor("price")
                            }}
                        />
                        {validator?.current?.message("price", price, "required|integer")}


                        <input
                            type="file"
                            name="imageUrl"
                            style={{ marginBottom: 3 }}
                            className="form-control mb-2"
                            aria-describedby="imageUrl"
                            onChange={(e) => {
                                setImageUrl(true);
                                validator?.current?.showMessageFor("imageUrl")
                            }}
                        />
                        {validator?.current?.message("imageUrl", imageUrl, "required")}


                        <div className="mb-2">
                          <select value={category} className="form-control mb-2" 
                                  onChange={(e) => {
                                        setCategory(e.target.value);
                                        validator?.current?.showMessageFor("category")
                                    }}
                          >
                            <option value=""> Select Category </option>
                            {categories.map(category => (
                                <option key={category.id} value={category.name}>
                                  {category.name}
                                </option>
                              ))
                            }
                          </select>
                          {validator?.current?.message("category", category, "required")} 
                        </div>

                        
                        <textarea
                            name="info"
                            placeholder="info"
                            className="form-control"
                            style={{ marginBottom: 3 }}
                            value={info}
                            onChange={(e) => {
                                setInfo(e.target.value);
                                validator?.current?.showMessageFor("info")
                            }}
                        />
                        {validator?.current?.message("info", info, "required")}

                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-success "
                                style={{ margin: "1em" }}
                            >
                                Add course
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

export default NewCourseDialog;
