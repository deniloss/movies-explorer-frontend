import React from 'react';
import {Link} from "react-router-dom";

import image from '../../images/logo.svg';

import cl from './Register.module.css';

const Register = () => {
  return (
    <section className={cl.register}>
      <div className={cl.register__wrapper}>
        <Link to='/' className={cl.register__image}><img src={image} alt="logo"/></Link>

        <h1 className={cl.register__title}>Добро пожаловать</h1>
        <form className={cl.register__form} action="">

            <label className={cl.register__label}>
              <span className={cl.register__inputName}>Имя</span>
              <input className={cl.register__input} placeholder='Имя' type="text"/>
              <span className={cl.register__error}>Что-то пошло не так...</span>
            </label>

            <label className={cl.register__label}>
              <span className={cl.register__inputName}>E-mail</span>
              <input className={cl.register__input} placeholder='E-mail' type="text"/>
              <span className={cl.register__error}>Что-то пошло не так...</span>
            </label>

            <label className={cl.register__label}>
              <span className={cl.register__inputName}>Пароль</span>
              <input className={cl.register__input} placeholder='Пароль' type="text"/>
              <span className={cl.register__error}>Что-то пошло не так...</span>
            </label>

            <button className={cl.register__button}>Зарегистрироваться</button>

        </form>


        <p className={cl.register__span}>Уже зарегистрированы? <Link className={cl.register__login} to='/signin'>Войти</Link></p>
      </div>
    </section>
  );
};

export default Register;
