import {FC} from "react";
import { ICourse } from "../../utils/types";

interface IProps {
    courses: ICourse[];
}

const Dashboard: FC<IProps> = ({ courses }) => {
    return (
        <div className="container-fluid" style={{ marginTop: "5em" }}>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-graduation-cap fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge"> {courses.length} </div>
                                    <div>  Course Numbers </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="alert-info alert text-center">
                    Welcome to Dashboard
                </div>
            </div>
        </div>
    );
};

export default Dashboard;