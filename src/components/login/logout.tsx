import { useEffect, FC} from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../../features/userSlice";
import { useNavigate } from 'react-router-dom';

const Logout: FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("token");
        dispatch(clearUser());
        navigate("/", {replace: true});
    }, []);

    return null;    
};

export default Logout;