import React, { useEffect, useState, useContext } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { useDispatch } from "react-redux";
import { handleCourseUpdate } from "../../../actions/courses";
import { dashContext } from './../../context/dashContext';

const EditCourseDialog = ({ showDialog, closeDialog, course }) => {
    const [courseId, setCourseId] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [category,setCategory] = useState();
    const [info, setInfo] = useState();


    const dispatch = useDispatch();

    const context = useContext(dashContext);
    const {categories} = context; 

    useEffect(() => {
        setCourseId(course._id);
        setTitle(course.title);
        setPrice(course.price);
        setImageUrl(course.imageUrl);
        setCategory(course.category);
        setInfo(course.info);

        return () => {
            setCourseId();
            setTitle();
            setPrice();
            setImageUrl();
            setCategory();
            setInfo();
        };
    }, [course]);

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new FormData();
        data.append("title", title);
        data.append("price", price);
        if (event.target.imageUrl.files[0])
            data.append("imageUrl", event.target.imageUrl.files[0]);
        else data.append("imageUrl", imageUrl);
        data.append("category", category);
        data.append("info", info);

        dispatch(handleCourseUpdate(courseId, data));
        closeDialog();
    };


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
                          <select value={category} className="form-control mb-2" 
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
            </DialogContent>
        </DialogOverlay>
    );
};

export default EditCourseDialog;
