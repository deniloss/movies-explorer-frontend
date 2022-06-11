import React from 'react';
import {Link} from "react-router-dom";

import arrow from '../../../images/arrow-link.svg'
import cl from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <section className={cl.portfolio}>

      <div className={cl.portfolio__container}>
        <h2 className={cl.portfolio__title}>Портфолио</h2>
        <div className={cl.portfolio__list}>


          <Link to='https://github.com/deniloss/how-to-learn' className={cl.portfolio__item}>
            Статичный сайт
            <img className={cl.portfolio__link} src={arrow} alt="ссылка на проект"/>
          </Link>

          <Link to='https://github.com/deniloss/russian-travel' className={cl.portfolio__item}>
            Адаптивный сайт
            <img className={cl.portfolio__link} src={arrow} alt="ссылка на проект"/>
          </Link>

          <Link to='https://github.com/deniloss/react-mesto-api-full' className={cl.portfolio__item}>
            Одностраничное приложение
            <img className={cl.portfolio__link} src={arrow} alt="ссылка на проект"/>
          </Link>

        </div>
      </div>

    </section>
  );
};

export default Portfolio;
