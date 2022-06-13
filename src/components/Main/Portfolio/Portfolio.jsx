import React from 'react';

import arrow from '../../../images/arrow-link.svg'
import cl from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <section className={cl.portfolio}>

      <div className={cl.portfolio__container}>
        <h2 className={cl.portfolio__title}>Портфолио</h2>
        <div className={cl.portfolio__list}>


          <a
            href='https://github.com/deniloss/how-to-learn'
            className={cl.portfolio__item}
            target='_blank'
          >
            Статичный сайт
            <img className={cl.portfolio__link} src={arrow} alt="ссылка на проект"/>
          </a>

          <a
            href='https://github.com/deniloss/russian-travel'
            className={cl.portfolio__item}
            target='_blank'
          >
            Адаптивный сайт
            <img className={cl.portfolio__link} src={arrow} alt="ссылка на проект"/>
          </a>

          <a
            href='https://github.com/deniloss/react-mesto-api-full'
            className={cl.portfolio__item}
            target='_blank'
          >
            Одностраничное приложение
            <img className={cl.portfolio__link} src={arrow} alt="ссылка на проект"/>
          </a>

        </div>
      </div>

    </section>
  );
};

export default Portfolio;
