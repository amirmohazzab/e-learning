import {useState, FC} from "react";
import Helmet from "react-helmet";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AdminTopNav from "../admin/AdminTopNav";
import AdminSidebar from "../admin/AdminSidebar";
import ToggleButton from "./ToggleButton";
import ToggleSidebar from "./ToggleSidebar";
import { IFCProps, IRootState } from "../../utils/types";

import "./ToggleSidebar.css";


const PrivateLayout: FC<IFCProps> = ({children}) => {

	const {user} = useSelector((state: IRootState) => state.user);

	const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

	const openSidebar = () => setIsOpenSidebar(true);
    const closeSidebar = () => setIsOpenSidebar(false);
    

    return (
        <div id="wrapper">
            <Helmet>
                <title> Bestlearn | Dashboard </title>
            </Helmet>

			<nav 
				className="navbar navbar-inverse navbar-fixed-top" 
				role="navigation"
			>
			  <div className="container-fluid">
				<div style={{display: "flex", justifyContent: "space-between"}}> 
					<div>
						<Link className="navbar-brand" to="/dashboard">
							Bestlearn Dashboard
						</Link>
				
						<ToggleButton openSidebar={openSidebar}/>
					</div>
					<div>
						<AdminTopNav user={user} />
					</div>
				</div>
			  </div>

			  <AdminSidebar />

			  {isOpenSidebar && ( <ToggleSidebar isOpenSidebar={isOpenSidebar} closeSidebar={closeSidebar}/>)}

			</nav>
			<div id="page-wrapper">{children}</div>
		</div>
    );
};

export default PrivateLayout;
