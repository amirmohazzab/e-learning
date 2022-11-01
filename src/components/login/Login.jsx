import React, {useState, useRef} from "react";
import {useNavigate} from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator';
import Helmet from 'react-helmet';
import { toast } from 'react-toastify';
import { loginUser } from "../../services/userService";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [,forceUpdate] = useState();

  const validator = useRef(new SimpleReactValidator({
    element: message => <div style={{color: "red"}}>{message}</div>
  }));

  const navigate = useNavigate();

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {email, password};

    try {
      if(validator.current.allValid()) {
        const {data, status} = await loginUser(user);
      if (status === 200){
          toast.success("user was successfully loggedin", {
            position: "top-right",
            closeOnClick: true
          })
          localStorage.setItem("token", data.token);
          navigate("/", {replace: true});
          reset();
      }
    } else {
      validator.current.showMessages();
        forceUpdate(1);
    }
      
    } catch(ex){
      toast.error("problem was occured", {
        position: "top-right",
        closeOnClick: true
      })
      console.log(ex);
    }  
  }

  return (
    <main className="client-page">
      <div className="container-content">
        <header>
          <h2> Login </h2>
        </header>
        <Helmet>
          <title> Bestlearn | Login </title>
        </Helmet>


        <div className="form-layer">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <span className="input-group-addon" id="email-address">
                <i className="zmdi zmdi-email"></i>
              </span>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email"
                aria-describedby="email-address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validator.current.showMessageFor("email")}
                }
              />
              {validator.current.message("email", email, "required|email")}
            </div>

            <div className="input-group">
              <span className="input-group-addon" id="password">
                <i className="zmdi zmdi-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="password "
                aria-describedby="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validator.current.showMessageFor("password")}
                }
              />
               {validator.current.message("password", password, "required|min:5")}
            </div>

            <button className="btn btn-success"> Login </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
