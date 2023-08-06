import { Fragment, FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
    return (
        <Fragment>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2> Not Found    </h2>

                    <Link to="/">
                        <span className="arrow" />
                        Back to mail page
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default NotFound;