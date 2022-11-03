import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../../actions/user";
import { useNavigate } from 'react-router-dom';

const Logout = () => {

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