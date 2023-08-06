import { useState, useRef, useEffect, createContext, FC, FormEvent, ReactNode } from "react";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";
import { decodeToken } from "react-jwt";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { showLoading, hideLoading} from 'react-redux-loading-bar';

import { successMessage, errorMessage } from "./../../utils/message";
import { loginUser, registerUser } from "../../services/userService";
import { addUser} from "../../features/userSlice";
import { getBasket } from './../../features/cartSlice';
import { IFCProps, IToken, IUserContextProps } from "../../utils/types";


export const userContext = createContext<IUserContextProps>({
    fullname: "",
    setFullname: () => {},
    email: "",
    setEmail: () => {},
    password: "",
    setPassword: () => {},
    validator: null,
    handleLogin: async () => {},
    handleRegister: async () => {},
});


const UserContext: FC<IFCProps> = ({ children }) => {
    const [fullname, setFullname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [, forceUpdate] = useState<number>(0);


    useEffect(() => {
        return () => {
            setFullname("");
            setEmail("");
            setPassword("");
            forceUpdate(1);
        };
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validator = useRef<SimpleReactValidator | null>(
        new SimpleReactValidator({
            element: (message: ReactNode) => <div style={{ color: "red" }}>{message}</div>
        })
    );


    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();
        const user = { email, password };

        try {
            if (validator.current?.allValid()) {
                dispatch(showLoading());
                const { status, data } = await loginUser(user);
                if (status === 200) {
                    successMessage("Login was successful");
                    localStorage.setItem("token", data.token);
                    axios.defaults.headers.common[
                        "Authorization"
                      ] = `Bearer ${data.token}`;
                    const myDecodedToken: IToken | null = decodeToken(data.token);
                    dispatch(addUser(myDecodedToken?.user));
                    dispatch(getBasket());
                    dispatch(hideLoading());
                    navigate("/", {replace: true});
                   
                }
            } else {
                validator.current?.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            console.log(ex);
            errorMessage("Problem was occured");
            dispatch(hideLoading());
        }
    };

    const handleRegister = async (event: FormEvent) => {
        event.preventDefault();
        const user = {
            fullname,
            email,
            password
        };

        try {
            if (validator.current?.allValid()) {
                dispatch(showLoading());
                const { status } = await registerUser(user);
                if (status === 201) {
                    successMessage("User was successfully created");
                    dispatch(hideLoading());
                    navigate("/login");
                }
            } else {
                validator.current?.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            errorMessage("Problen since registeration");
            dispatch(hideLoading());
            console.log(ex);
        }
    };

    return (
        <userContext.Provider
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
        </userContext.Provider>
    );
};

export default UserContext;
