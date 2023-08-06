import {FC} from "react";
import {Link} from "react-router-dom"


const Footer: FC = () => {
  return (   
    <footer>
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <section className="list">
                <header>
                  <h4> Quick access </h4>
                </header>
                <ul>
                  <li>
                  <Link to="/archive"> All Courses </Link>
                  </li>
                  <li>
                    <a href=""> Laws </a>
                  </li>
                  <li>
                    <a href=""> Guide to buy </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <section className="list">
                <header>
                  <h4> Quick access </h4>
                </header>
                <ul>
                  <li>
                  <Link to="/archive"> All Courses </Link>
                  </li>
                  <li>
                    <a href=""> Laws </a>
                  </li>
                  <li>
                    <a href=""> Guide to buy </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <section className="list">
                <header>
                  <h4> Quick access </h4>
                </header>
                <ul>
                  <li>
                  <Link to="/archive"> All Courses </Link>
                  </li>
                  <li>
                    <a href=""> Laws </a>
                  </li>
                  <li>
                    <a href=""> Guide to buy </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <section className="list">
                <header>
                  <h4> Quick access </h4>
                </header>
                <ul>
                  <li>
                    <Link to="/archive"> All Courses </Link>
                  </li>
                  <li>
                    <a href=""> Laws </a>
                  </li>
                  <li>
                    <a href=""> Guide to buy </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <p>
             All rights are reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
