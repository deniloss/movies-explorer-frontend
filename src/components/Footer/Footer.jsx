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
            <a target='_blank' className={cl.footer__item} href="https://practicum.yandex.ru">Яндекс Практикум</a>
            <a target='_blank' className={cl.footer__item} href="https://github.com/deniloss/">Github</a>
            <a target='_blank' className={cl.footer__item} href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
