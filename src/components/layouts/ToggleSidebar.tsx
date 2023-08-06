import {FC} from "react";
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaGraduationCap, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";


interface IProps {
     isOpenSidebar: boolean;
     closeSidebar: () => void;
}


const ToggleSidebar: FC<IProps> = ({isOpenSidebar, closeSidebar}) => {


     const links = [
        {
             id: 1,
             url: '/dashboard',
             text: 'Dashboard',
             icon: <AiOutlineDashboard />
        },
        {
             id: 2,
             url: '/dashboard/courses',
             text: 'Courses',
             icon: <FaGraduationCap />
        }
    ];


    return (
         <aside className={`${isOpenSidebar ? 'sidebar show-sidebar' : 'sidebar' }`}>
              <div className="sidebar-header">
                   <button className="close-btn" onClick={closeSidebar}>
                         <FaTimes />
                   </button>
              </div>
              <ul className="links">
                   {
                        links.map((link) => 
                          {
                             const {id,url,text,icon} = link;
                             return (
                             <li key={id}>
                                  <Link to={url}>
                                        {icon}
                                        {text}
                                   </Link>
                             </li>
                             );
                          })}
              </ul>
         </aside>
    );
};

export default ToggleSidebar;

