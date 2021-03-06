import React  from 'react';


import cl from './Navigation.module.css';

import image from "../../images/logo.svg";
import icon from '../../images/icon-account.svg'
import burger_icon from '../../images/burger-icon.svg';
import burger_close from '../../images/burger_close.svg';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const Navigation = () => {

  const {pathname} = useLocation()

  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 800);

  let navigationClassName = `${cl.navigation}`;
  let navigationLinkClassName = `${cl.navigation__link}`;
  let navigationAccountClassName = `${cl.navigation__account}`;

  if (pathname === '/') {
    navigationClassName = `${cl.navigation} ${cl.navigation_main}`;
    navigationLinkClassName = `${cl.navigation__link} ${cl.navigation__link_main}`;
    navigationAccountClassName = `${cl.navigation__account} ${cl.navigation__account_main}`
  }


  function updateScreenType() {
    setIsMobile(window.innerWidth <= 800);
  }

  React.useEffect(() => {
    window.addEventListener('resize', updateScreenType);
    return () => {
      window.removeEventListener('resize', updateScreenType);
    };
  }, []);

  return (

    <>
      {!isMobile && (
        <section className={navigationClassName}>

          <nav className={cl.navigation__header}>
            <a className={cl.navigation__logo} href="/"><img src={image} alt="Logo"/></a>

            <div className={cl.navigation__links}>
              <Link to ='/movies' className={navigationLinkClassName}>Фильмы</Link>
              <Link to ='/movies/saved' className={navigationLinkClassName}>Сохранённые фильмы</Link>
            </div>
            <Link to ='/profile' className={navigationAccountClassName}><img className={cl.navigation__icon} src={icon} alt="Иконка аккаунта"/>Аккаунт</Link>
          </nav>

        </section>
      )}

      {isMobile && (
        <section className={cl.navigation}>

          <nav className={cl.navigation__header}>
            <Link className={cl.navigation__logo} to="/"><img src={image} alt="Logo"/></Link>
            <button className={cl.navigation__burgerButt}><img src={burger_icon} alt="burger menu icon"/></button>
          </nav>

          <div className={cl.navigation__burgerMenu}>
            <button className={cl.navigation__burgerClose}><img src={burger_close} alt="Кнопка закрытия burger menu"/></button>
            <ul className={cl.navigation__burgerWrapper}>
              <Link className={cl.navigation__burgerItem} to="/"><li>Главная</li></Link>
              <Link className={cl.navigation__burgerItem} to="/movies"><li>Фильмы</li></Link>
              <Link className={cl.navigation__burgerItem} to="/saved-movies"><li >Сохранённые фильмы</li></Link>
            </ul>
          </div>

        </section>
      )}
    </>

  );
};

export default Navigation;
