import React, { useState, useRef, useEffect } from "react";
import SimpleReactValidator from "simple-react-validator";
import { useDispatch } from "react-redux";
import { context } from "./context";
import { successMessage, errorMessage } from "./../../utils/message";
import { loginUser, registerUser } from "../../services/userService";
// import { addUser } from "./../../actions/user";
import { decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';
import { showLoading, hideLoading} from 'react-redux-loading-bar'
// import { getBasket } from './../../actions/cart';
import { addUser} from "../../features/userSlice";
import { getBasket } from './../../features/cartSlice';

const UserContext = ({ children }) => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [, forceUpdate] = useState();


    useEffect(() => {
        return () => {
            setFullname();
            setEmail();
            setPassword();
            forceUpdate();
        };
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validator = useRef(
        new SimpleReactValidator({
            element: message => <div style={{ color: "red" }}>{message}</div>
        })
    );


    const handleLogin = async event => {
        event.preventDefault();
        const user = { email, password };

        try {
            if (validator.current.allValid()) {
                dispatch(showLoading());
                const { status, data } = await loginUser(user);
                if (status === 200) {
                    successMessage("Login was successful");
                    localStorage.setItem("token", data.token);
                    const myDecodedToken = decodeToken(data.token);
                    dispatch(addUser(myDecodedToken.user));
                    dispatch(getBasket());
                    dispatch(hideLoading());
                    navigate("/", {replace: true});
                   
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            console.log(ex);
            errorMessage("Problem was occured");
            dispatch(hideLoading());
        }
    };

    const handleRegister = async event => {
        event.preventDefault();
        const user = {
            fullname,
            email,
            password
        };

        try {
            if (validator.current.allValid()) {
                dispatch(showLoading());
                const { status } = await registerUser(user);
                if (status === 201) {
                    successMessage("User was successfully created");
                    dispatch(hideLoading());
                    navigate("/login");
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            errorMessage("Problen since registeration");
            dispatch(hideLoading());
            console.log(ex);
        }
    };

    return (
        <context.Provider
            value={{
                fullname,
                setFullname,
                email,
                setEmail,
                password,
                setPassword,
                validator,
                handleLogin,
                handleRegister
            }}
        >
            {children}
        </context.Provider>
    );
};

export default UserContext;
