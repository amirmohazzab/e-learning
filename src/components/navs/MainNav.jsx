import "./MainNav.css";

const MainNav = () => {
  return (
    <nav
      className="navbar navbar-default"
      style={{ background: "green", marginBottom: 0, borderWidth: 0}}
    >
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed pull-left"
            data-toggle="collapse"
            data-target="#alignment-example"
            aria-expanded="false"
            style={{marginLeft: "15px"}}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="alignment-example">
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Mobile <span className="caret"></span>
              </a>
              <ul className="dropdown-menu navbar-bg-green" aria-labelledby="about-us">
                <li>
                  <a href="#">Xamarine</a>
                </li>
                <li>
                  <a href="#">React Native</a>
                </li>
                <li>
                  <a href="#">Ionic</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Web <span className="caret"></span>
              </a>
              <ul className="dropdown-menu navbar-bg-green" aria-labelledby="about-us">
                <li>
                  <a href="#">.Net</a>
                </li>
                <li>
                  <a href="#">Django</a>
                </li>
                <li>
                  <a href="#">Nodejs</a>
                </li>
                <li>
                  <a href="#">Spring Boot</a>
                </li>
                <li>
                  <a href="#">Laravel</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Desktop <span className="caret"></span>
              </a>
              <ul className="dropdown-menu navbar-bg-green" aria-labelledby="about-us">
                <li>
                  <a href="#">Electron</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Design <span className="caret"></span>
              </a>
              <ul className="dropdown-menu navbar-bg-green" aria-labelledby="about-us">
                <li>
                  <a href="#">Bootstrap</a>
                </li>
                <li>
                  <a href="#">Tailwind Css</a>
                </li>
                <li>
                  <a href="#">Material UI</a>
                </li>
                <li>
                  <a href="#">Material Design</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Database <span className="caret"></span>
              </a>
              <ul className="dropdown-menu navbar-bg-green" aria-labelledby="about-us">
                <li>
                  <a href="#">MySql</a>
                </li>
                <li>
                  <a href="#">MongoDB</a>
                </li>
                <li>
                  <a href="#">Redis</a>
                </li>
                <li>
                  <a href="#">Maria DB</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
