import Modal from "react-modal";
import {useState, useEffect, FC} from "react";

import config from '../../../services/config.json';
import { ICourse } from "../../../utils/types";
import { modalContent } from "./modalStyle";

interface IProps {
  showDialog: boolean;
  closeDialog: () => void;
  course: ICourse;
}


const ImageCourseDialog: FC<IProps> = ({ showDialog, closeDialog, course }) => {

  const [imageUrl, setImageUrl] = useState<string | undefined>("");

  useEffect(() => {
    setImageUrl(course.imageUrl);

    return () => {
      setImageUrl("");
    }
  }, []);


    return (
        <Modal 
          isOpen={showDialog} 
          onRequestClose={closeDialog}
          style={{
            content: modalContent,
          }}
        >
          <img src={`${config.localapi}/${course.imageUrl}`} />
        </Modal>
    );
  }

  export default ImageCourseDialog;