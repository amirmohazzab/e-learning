import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <a href="" className="logo">
          <img src="images/header-image.png" />
        </a>
        <h1> Self learning by Bestlearn </h1>
        <h2> Experience and Enter Job Market </h2>
      </header>
      <div className="search-form">
        <form>
          <button>
              <i className="zmdi zmdi-search"></i>
          </button>
          <input type="text" name="" placeholder="what do you want to learn" />
        </form>
      </div>
    </>
  );
};

export default Header;
