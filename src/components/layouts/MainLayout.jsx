import React from "react";
import TopNav from './../navs/TopNav';
import Header from './../common/Header';
import MainNav from './../navs/MainNav';
import Footer from './../common/Footer';
import { useLocation } from "react-router-dom";
import Helmet from 'react-helmet';


const MainLayout = ({ children }) => {

  const location = useLocation();
  return (
    <div>
      <Helmet>
        <title> Bestlearn | Bestlearn Selflearner </title>
      </Helmet>
      <div className="landing-layer">
        <div className="container">
          <TopNav />
          {
              (location.pathname === "/" ? <Header/> : null) 
          }
        </div>
      </div>
      <MainNav />
      <main id="home-page">
        <div className="container">
            {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
