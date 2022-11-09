import React, {useState, useEffect} from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import config from '../../../services/config.json';


const ImageCourseDialog = ({ showDialog, closeDialog, course }) => {

  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    setImageUrl(course.imageUrl);

    return () => {
      setImageUrl();
    }
  }, []);


    return (
      <div>  
        <DialogOverlay isOpen={showDialog} onDismiss={closeDialog}>
          <DialogContent className="text-center mx-auto"
            style={{
              border: "solid 5px hsla(0, 0%, 0%, 0.5)",
              borderRadius: "10px",
            }}
          >
          <img src={`${config.localapi}/${course.imageUrl}`} />
          </DialogContent>
        </DialogOverlay>
      </div>
    );
  }

  export default ImageCourseDialog;