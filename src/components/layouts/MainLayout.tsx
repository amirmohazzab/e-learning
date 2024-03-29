import {FC} from "react";
import Helmet from 'react-helmet';
import LoadingBar from "react-redux-loading-bar";
import { useLocation } from "react-router-dom";

import TopNav from './../navs/TopNav';
import Header from './../common/Header';
import MainNav from './../navs/MainNav';
import Footer from './../common/Footer';

import { IFCProps } from "../../utils/types";


const MainLayout: FC<IFCProps> = ({ children }) => {

  const location = useLocation();
  return (
    <div>
      <Helmet>
        <title> Bestlearn | Bestlearn Selflearner </title>
      </Helmet>
     
      <div className="landing-layer">
      <LoadingBar style={{backgroundColor: "lime", height: "5px"}}/>
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
