import React from 'react';

import cl from './AboutProject.module.css'

const AboutProject = () => {
  return (
    <section className={cl.aboutProject}>
      <div className={cl.aboutProject__container}>
        <h2 className={cl.aboutProject__title}>О проекте</h2>
        <div className={cl.aboutProject__list}>
          <div className={cl.aboutProject__item}>
            <h3 className={cl.aboutProject__articleTitle}>Дипломный проект включал 5 этапов</h3>
            <p className={cl.aboutProject__articleText}>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className={cl.aboutProject__item}>
            <h3 className={cl.aboutProject__articleTitle}>На выполнение диплома ушло 5 недель</h3>
            <p className={cl.aboutProject__articleText}>На выполнение диплома ушло 5 недель</p>
          </div>
        </div>

        <div className={cl.aboutProject__scale}>
          <div className={cl.aboutProject__smallPart}>1 неделя</div>
          <div className={cl.aboutProject__bigPart}>4 недели</div>
          <p className={cl.aboutProject__textPart}>Back-End</p>
          <p className={cl.aboutProject__textPart}>Front-End</p>
        </div>
      </div>

    </section>
  );
};

export default AboutProject;
