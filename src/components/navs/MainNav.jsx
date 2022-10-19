import React from "react";

const MainNav = () => {
  return (
    <div className="main-menu">
      <div className="container">       
        <nav>
          <span className="responsive-sign">
            <i className="zmdi zmdi-menu"></i>       
          </span>
          <ul>
            <li>
              <a href=""> Mobile </a>
              <ul>
                <li>
                  <a href=""> Xamarin </a>
                </li>
                <li>
                  <a href=""> react Native </a>
                </li>
                <li>
                  <a href=""> Ionic </a>
                </li>
              </ul>
            </li>
            <li>
              <a href=""> Web </a>
              <ul>
                <li>
                  <a href=""> Asp.net Core </a>
                </li>
                <li>
                  <a href=""> Django  </a>
                </li>
                <li>
                  <a href=""> NodeJS </a>
                </li>
                <li>
                  <a href=""> Spring boot </a>
                </li>
                <li>
                  <a href=""> Laravel </a>
                </li>
              </ul>
            </li>
            <li>  
              <a href=""> Desktop </a>
            <ul>
              <li>
                <a href=""> Electron </a>
              </li>
            </ul>
            </li> 
            <li>
              <a href=""> Design </a>
              <ul>
                <li>
                  <a href=""> Bootstrap </a>
                </li>
                <li>
                  <a href=""> TailwindCSS </a>
                </li>
                <li>
                  <a href=""> Material UI </a>
                </li>
                <li>
                  <a href=""> Material Design </a>
                </li>
              </ul>
            </li>
            <li>
              <a href=""> Database </a>
              <ul>
                <li>
                  <a href=""> MySQL </a>
                </li>
                <li>
                  <a href=""> MongoDB </a>
                </li>
                <li>
                  <a href=""> Redis </a>
                </li>
                <li>
                  <a href=""> MariaDB </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainNav;
