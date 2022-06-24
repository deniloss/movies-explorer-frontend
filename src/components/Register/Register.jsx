import React from 'react';
import {Link} from "react-router-dom";
import {useFormWithValidation} from "../../utils/ReactValidation";

import image from '../../images/logo.svg';

import cl from './Register.module.css';

const Register = ({handleRegister}) => {

  const formWithValidation = useFormWithValidation();
  const {name, email, password} = formWithValidation.values;
  const {values, handleChange, errors, onFocus, isFocused} = formWithValidation;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister({name, email, password});
    formWithValidation.resetForm();
  }

  return (
    <section className={cl.register}>
      <div className={cl.register__wrapper}>
        <Link to='/' className={cl.register__image}><img src={image} alt="logo"/></Link>

        <h1 className={cl.register__title}>Добро пожаловать</h1>
        <form onSubmit={handleSubmit} className={cl.register__form} action="">

          <label className={cl.register__label}>
            <span className={cl.register__inputName}>Имя</span>
            <input
              className={cl.register__input}
              onChange={handleChange}
              onFocus={onFocus}
              placeholder='Имя'
              name='name'
              type="text"/>
            <span className={`${cl.register__error} ${cl.register__error_visible}`}>&nbsp;{isFocused && errors.name}</span>
          </label>

          <label className={cl.register__label}>
            <span className={cl.register__inputName}>E-mail</span>
            <input
              className={cl.register__input}
              onChange={handleChange}
              onFocus={onFocus}
              placeholder='E-mail'
              name='email'
              type="email"
              value={values.email || ''}/>
            <span className={`${cl.register__error} ${cl.register__error_visible}`}>&nbsp;{isFocused && errors.email}</span>
          </label>

          <label className={cl.register__label}>
            <span className={cl.register__inputName}>Пароль</span>
            <input
              className={cl.register__input}
              onChange={handleChange}
              onFocus={onFocus}
              placeholder='Пароль'
              name='password'
              type="password"
              value={values.password || ''}/>
            <span className={`${cl.register__error} ${cl.register__error_visible}`} >&nbsp;{isFocused && errors.password}</span>
          </label>

          <button type='submit' className={cl.register__button}>Зарегистрироваться</button>

        </form>


        <p className={cl.register__span}>Уже зарегистрированы? <Link className={cl.register__login}
                                                                     to='/signin'>Войти</Link></p>
      </div>
    </section>
  );
};

export default Register;
