import React from 'react';
import {Link} from "react-router-dom";

import cl from './Login.module.css'
import image from "../../images/logo.svg";

const Login = () => {
  return (
    <section className={cl.login}>
      <div className={cl.login__wrapper}>
        <Link to='/' className={cl.login__image}><img src={image} alt="logo"/></Link>
        <h1 className={cl.login__title}>Добро пожаловать</h1>
        <form className={cl.login__form} action="">

          <label className={cl.login__label}>
            <span className={cl.login__inputName}>E-mail</span>
            <input className={cl.login__input} placeholder='E-mail' type="text"/>
            <span className={cl.login__error}>Что-то пошло не так...</span>
          </label>

          <label className={cl.login__label}>
            <span className={cl.login__inputName}>Пароль</span>
            <input className={cl.login__input} placeholder='Пароль' type="text"/>
            <span className={cl.login__error}>Что-то пошло не так...</span>
          </label>

          <button className={cl.login__button}>Войти</button>

        </form>


        <p className={cl.login__span}>Ещё не зарегистрированы? <Link className={cl.login__login} to='login'>Зарегистрироваться</Link></p>
      </div>
    </section>
  );
};

export default Login;
