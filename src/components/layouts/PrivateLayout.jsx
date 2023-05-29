import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import AdminTopNav from "../admin/AdminTopNav";
import AdminSidebar from "../admin/AdminSidebar";
import ToggleButton from "./ToggleButton";
import ToggleSidebar from "./ToggleSidebar";
import "./ToggleSidebar.css";


const PrivateLayout = ({children}) => {

	const [isOpenSidebar, setIsOpenSidebar] = useState(false);

	const openSidebar = () => {
        setIsOpenSidebar(true)
    }

    const closeSidebar = () => {
        setIsOpenSidebar(false)
    }


	
    const {user} = useSelector((state) => state.user);

    return (
        <div id="wrapper">
            <Helmet>
                <title> Bestlearn | Dashboard </title>
            </Helmet>

			<nav 
				class="navbar navbar-inverse navbar-fixed-top" 
				role="navigation"
				
			>
			  <div class="container-fluid">
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

			  {isOpenSidebar && <ToggleSidebar isOpenSidebar={isOpenSidebar} closeSidebar={closeSidebar}/>}

			</nav>
			<div id="page-wrapper">{children}</div>
		</div>
    );
};

export default PrivateLayout;
