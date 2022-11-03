import React from "react";
import ScaleLoader from 'react-spinners/ScaleLoader';
import config from "../../services/config.json";
import { Img } from 'react-image';

const ShowImage = ({ image }) => {
    return (
        <Img
            src={[`${config.localapi}/${image}`,`https://via.placeholder.com/150x100`]}
            loader={
                <div className="text-center mx-auto">
                    <ScaleLoader loading={true} color={"#4A90E2"} />
                </div>
            }
        />
    );
};

export default ShowImage;
