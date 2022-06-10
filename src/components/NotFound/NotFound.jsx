import React from 'react';
import {Link} from "react-router-dom";

import cl from './NotFound.module.css'


const NotFound = () => {
  return (
    <section className={cl.notFound}>
      <div className={cl.notFound__wrapper}>
        <h1 className={cl.notFound__title}>404</h1>
        <p className={cl.notFound__text}>Страница не найдена</p>
        <Link to='/movies' className={cl.notFound__link}>Назад</Link>
      </div>

    </section>
  );
};

export default NotFound;
