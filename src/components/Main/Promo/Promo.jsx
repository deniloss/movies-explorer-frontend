import React from 'react';

import cl from './Promo.module.css';
import image from '../../../images/header-landing_image.png'

const Promo = () => {
  return (
    <section className={cl.promo}>
      <div className={cl.promo__container}>
        <img src={image} alt='фото' className={cl.promo__image}/>
        <div className={cl.promo__text}>
          <div className={cl.promo__wrapper}>
            <h1 className={cl.promo__title}>Учебный проект студента факультета Веб-разработки.</h1>
            <p className={cl.promo__article}>Листайте ниже, чтобы узнать больше про этот <br/> проект и его создателя.</p>
            <button className={cl.promo__button}>Узнать больше</button>
          </div>


        </div>


      </div>
    </section>
  );
};

export default Promo;
