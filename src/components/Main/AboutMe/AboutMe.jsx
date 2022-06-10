import React from 'react';

import cl from './AboutMe.module.css'
import image from '../../../images/profile_img.png';

const AboutMe = () => {
  return (
    <section className={cl.about}>
      <div className={cl.about__container}>

        <h2 className={cl.about__title}>Студент</h2>
        <div className={cl.about__wrapper}>
          <div className={cl.about__item}>
            <h3 className={cl.about__name}>Даниил</h3>
            <p className={cl.about__job}>Фронтенд-разработчик, 21 год</p>
            <p className={cl.about__article}>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <div>
              <a className={cl.about__link} href="#">Facebook</a>
              <a className={cl.about__link} href="#">Github</a>
            </div>

          </div>
          <img className={cl.about__image} src={image} alt="Фото профиля"/>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
