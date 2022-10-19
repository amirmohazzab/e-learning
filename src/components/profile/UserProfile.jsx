import React from "react";
import {Link} from 'react-router-dom';

const UserProfile = () => {
  return (
    <div class="user-account">
      <div class="row">
        <div class="col-md-3 col-sm-4 col-xs-12">
          <aside>
            <div class="avatar-layer">
              <div class="img-layer">
                <a href="" class="change-image">
                  <i class="zmdi zmdi-edit"></i>
                </a>
                <img src="images/pic/avatar.jpg" />
              </div>
              <div class="detail">
                <span> John Black </span>
              </div>
            </div>

            <section>
              <header>
                <h3> Dashboard </h3>
              </header>
              <div class="inner">
                <ul>
                  <li>
                    <Link to="/logout"> Logout </Link>
                  </li>
                </ul>
              </div>
            </section>
          </aside>
        </div>
        <div class="col-md-9 col-sm-8 col-xs-12">
          <section class="user-account-content">
            <header>
              <h1> Dashboard </h1>
            </header>
            <div class="inner">
              <div class="account-information">
                <h3> Information </h3>
                <ul>
                  <li>
                    {" "}
                    <i class="zmdi zmdi-account"></i> Fullname: John Black 
                  </li>
                  <li>
                    {" "}
                    <i class="zmdi zmdi-assignment-account"></i> User name: johnblack
                  </li>
                  <li>
                    {" "}
                    <i class="zmdi zmdi-email"></i> Email: johnblack@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
