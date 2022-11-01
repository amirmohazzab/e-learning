import React from "react";

const Archive = () => {



  return (
    <section className="term-categories">
      <div className="top-bar">
        <header>
         <h1> <span> Programming </span> Courses </h1> 
         <span> course numbers  </span>
        </header>

        <div className="row">   
          <div className="col-md-4 col-sm-12 col-xs-12 pull-right">
            <form action="" method="">
              <div className="input">
                <input type="text" name="" placeholder=" Subject ... " />
                <button>
                  <i className="zmdi zmdi-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="switch-field available">
              <input
                id="available-filter-1"
                name="available"
                value="all"
                checked=""
                type="radio"
              />
              <label for="available-filter-1"> Free </label>
              <input
                id="available-filter-2"
                name="available"
                value="off"
                type="radio"
              />
              <label for="available-filter-2"> Buy </label>
              <input
                id="available-filter-3"
                name="available"
                value="normal"
                type="radio"
              />
              <label for="available-filter-3"> All </label>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 pull-left">
            <div className="select-ddl">
              <select>
                <option> Sort </option>
                <option> price </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <aside className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
          <section className="aside-section filter-by-category">
            <header>
              <h3> Subject </h3>
            </header>
            <div className="inner">
              <ul>
                <li>
                  <input type="checkbox" name="" id="cat-1"/>
                  {" "}
                  <label for="cat-1"> Web programming </label>
                </li>
                <li>
                  <input type="checkbox" name="" id="cat-2" />
                  {" "}
                  <label for="cat-2"> Mobile programming </label>
                </li>
              </ul>
            </div>
          </section>
        </aside>

        <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
          <section className="terms-items">
            <div className="row">
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Archive;
