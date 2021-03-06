import React from 'react';
import {Link} from 'react-router-dom'

import cl from './Main.module.css';
import image from '../../images/logo.svg'

import Promo from "./Promo/Promo";
import Navigation from "../Navigation/Navigation";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";


const Main = ({loggedIn}) => {
  return (
    <section className={cl.main}>
      {loggedIn
        ?
        <Navigation />
        :
        <nav className={cl.main__header}>
          <a className={cl.main__logo} href='/'><img src={image} alt="Logo"/></a>
          <div className={cl.header__links}>
            <Link to='/signup' className={cl.header__link}>Регистрация</Link>
            <Link to='/signin' className={cl.header__link}>Войти</Link>
          </div>
        </nav>
      }

      <Promo/>
      <AboutProject/>
      <Techs/>
      <Portfolio/>
      <Footer/>
    </section>
  );
};

export default Main;
