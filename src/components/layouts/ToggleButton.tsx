import {FC} from 'react'
import {FaBars} from 'react-icons/fa';

interface IProps {
     openSidebar: () => void;
}

const ToggleButton: FC<IProps> = ({openSidebar}) => {

     return (
          <button className="sidebar-toggle" onClick={openSidebar}>
               <FaBars />
          </button>
     )
}

export default ToggleButton;