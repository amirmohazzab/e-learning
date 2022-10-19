import React from "react";

const Register = () => {
  return (
    <main className="client-page">
      <div className="container-content">
        <header>
          <h2> Register </h2>
        </header>

        <div className="form-layer">
          <form action="" method="">
            <div className="input-group">
              <span className="input-group-addon" id="username">
                <i className="zmdi zmdi-account"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="fullname"
                aria-describedby="username"
              />
            </div>

            <div className="input-group">
              <span className="input-group-addon" id="email-address">
                <i className="zmdi zmdi-email"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="email"
                aria-describedby="email-address"
              />
            </div>

            <div className="input-group">
              <span className="input-group-addon" id="password">
                <i className="zmdi zmdi-lock"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="password"
                aria-describedby="password"
              />
            </div>

            <button className="btn btn-success"> Register </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
