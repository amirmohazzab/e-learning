import {FC} from "react";
import { Link } from "react-router-dom";

import { IUserState } from "../../utils/types";

const AdminTopNav: FC<IUserState> = ({ user }) => {
    return (
        <ul className="nav navbar-right top-nav">
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-user"> </i> {user?.fullname}
                    <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <Link to="/user-profile">
                            <i className="fa fa-fw fa-user"></i> Profile
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
                            <i className="fa fa-fw fa-eye"></i> Visit
                        </Link>
                    </li>

                    <li className="divider"></li>
                    <li>
                        <Link to="/logout">
                            <i className="fa fa-fw fa-power-off"></i> Logout
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
};

export default AdminTopNav;