import React from 'react';

import cl from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className={cl.footer__container}>
        <h2 className={cl.footer__title}>Учебный проект Яндекс.Практикум х BeatFilm.</h2>

        <div className={cl.footer__wrapper}>
          <p className={cl.footer__copyright}>© 2022</p>
          <div>
            <a className={cl.footer__item} href="#">Яндекс Практикум</a>
            <a className={cl.footer__item} href="#">Github</a>
            <a className={cl.footer__item} href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
