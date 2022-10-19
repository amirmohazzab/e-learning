import React from "react";
import {Link} from "react-router-dom"

const Course = () => {
  return (
    <section className="terms-items">
      <header>
        <h2> Latest Bestlearn Courses </h2>
        <Link to="/archive"> All Courses </Link>
      </header>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link to="/course" className="img-layer">
              <img src="images/pic/1.jpg" />
            </Link>
            <h2>
              <a href=""> </a>
            </h2>
            <span>  </span>
            <i></i>
          </article>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link to="/course" className="img-layer">
              <img src="images/pic/2.jpg" />
            </Link>
            <h2>
              <a href="">  </a>
            </h2>
            <span>    </span>
            <i>     </i>
          </article>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link to="/course" className="img-layer">
              <img src="images/pic/3.jpg" />
            </Link>
            <h2>
              <a href="">  </a>
            </h2>
            <span>   </span>
            <i>  </i>
          </article>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link to="/course" className="img-layer">
              <img src="images/pic/4.jpg" />
            </Link>
            <h2>
              <a href="">   </a>
            </h2>
            <span>  </span>
            <i>  </i>
          </article>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link to="/course" className="img-layer">
              <img src="images/pic/5.jpg" />
            </Link>
            <h2>
              <a href="">     </a>
            </h2>
            <span>     </span>
            <i>   </i>
          </article>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link to="/course" className="img-layer">
              <img src="images/pic/6.jpg" />
            </Link>
            <h2>
              <a href="">             </a>
            </h2>
            <span>  </span>
            <i>    </i>
          </article>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link course="/course" className="img-layer">
              <img src="images/pic/7.jpg" />
            </Link>
            <h2>
              <a href="">     </a>
            </h2>
            <span>     </span>
            <i>   </i>
          </article>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
          <article>
            <Link to="/course" className="img-layer">
              <img src="images/pic/8.jpg" />
            </Link>
            <h2>
              <a href="">      </a>
            </h2>
            <span>    </span>
            <i>   </i>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Course;
