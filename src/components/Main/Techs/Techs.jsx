import React from 'react';

import cl from './Techs.module.css';

const Techs = () => {
  return (
    <section className={cl.techs}>
      <div className={cl.techs__container}>
        <h2 className={cl.techs__title}>Технологии</h2>
        <h3 className={cl.techs__main}>7 технологий</h3>
        <p className={cl.techs__article}>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className={cl.techs__list}>
          <p className={cl.techs__item}>HTML</p>
          <p className={cl.techs__item}>CSS</p>
          <p className={cl.techs__item}>JS</p>
          <p className={cl.techs__item}>React</p>
          <p className={cl.techs__item}>Git</p>
          <p className={cl.techs__item}>Express.js</p>
          <p className={cl.techs__item}>MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Techs;
