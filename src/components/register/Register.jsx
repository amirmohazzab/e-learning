import React, { useContext } from "react";
import Helmet from "react-helmet";
import { context } from './../context/context';

const Register = () => {

  const registerContext = useContext(context);

    const {
        fullname,
        setFullname,
        email,
        setEmail,
        password,
        setPassword,
        handleRegister,
        validator
    } = registerContext;
  
  return (
    <main className="client-page">
      <div className="container-content">

        <header>
          <h2> Register </h2>
        </header>

        <Helmet>
          <title> Bestlearn | Register </title>
        </Helmet>

        <div className="form-layer">
          <form onSubmit={e => handleRegister(e)}>
            <div className="input-group">
              <span className="input-group-addon" id="username">
                <i className="zmdi zmdi-account"></i>
              </span>
              <input
                type="text"
                name="fullname"
                className="form-control"
                placeholder="fullname"
                aria-describedby="username"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                  validator.current.showMessageFor("fullname")}
                }
              />
              {validator.current.message("fullname", fullname, "required|min:5")}
            </div>


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
                placeholder="password"
                aria-describedby="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validator.current.showMessageFor("password")}
                }
              />
               {validator.current.message("password", password, "required|min:5")}
            </div>

            <button className="btn btn-success"> Register </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
