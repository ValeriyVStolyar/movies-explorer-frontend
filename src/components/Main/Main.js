import React from 'react';
import './Main.css';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Main({ loggedIn, onOpenMenu }) {

  return (
    <div className="page__container">
      <Header
        loggedIn={loggedIn}
        onOpenMenu={onOpenMenu}
      />
      <main className="content page__content">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
