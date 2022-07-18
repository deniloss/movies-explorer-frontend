import React from 'react';
import {Link} from "react-router-dom";
import {useFormWithValidation} from "../../utils/ReactValidation";

import cl from './Login.module.css'
import image from "../../images/logo.svg";

const Login = ({handleLogin, errorMessage, isLoading}) => {

  const formWithValidation = useFormWithValidation();
  const {email, password} = formWithValidation.values;
  const {values, handleChange, errors, onFocus, isValid, resetForm} = formWithValidation;

  React.useEffect(() => {
    resetForm();
  }, [resetForm])

 const handleSubmit = (evt) => {
   evt.preventDefault();
   handleLogin({email, password});
   formWithValidation.resetForm();
 }

  return (
    <section className={cl.login}>
      <div className={cl.login__wrapper}>
        <Link to='/' className={cl.login__image}><img src={image} alt="logo"/></Link>
        <h1 className={cl.login__title}>Добро пожаловать</h1>
        <form
          noValidate
          onSubmit={handleSubmit}
          className={cl.login__form} action=""
        >

          <label className={cl.login__label}>
            <span className={cl.login__inputName}>E-mail</span>
            <input
              className={cl.login__input}
              placeholder='E-mail'
              onChange={handleChange}
              onFocus={onFocus}
              value={values.email || ''}
              type="text"
              name='email'
              disabled={isLoading}
              required
            />

            <span className={`${cl.login__error} ${errors.email && cl.login__error_visible}`}>&nbsp;{errors.email}</span>
          </label>

          <label className={cl.login__label}>
            <span className={cl.login__inputName}>Пароль</span>
            <input
              className={cl.login__input}
              placeholder='Пароль'
              onChange={handleChange}
              onFocus={onFocus}
              value={values.password || ''}
              type="password"
              name='password'
              disabled={isLoading}
              required
            />
            <span className={`${cl.login__error} ${errors.password && cl.login__error_visible}`}>&nbsp;{errors.password}</span>
          </label>

          <button type='submit' disabled={!isValid} className={`${!isValid && cl.login__button_disabled} ${cl.login__button}`}>Войти</button>
          <p className={cl.login__logError}>{errorMessage}</p>
        </form>


        <p className={cl.login__span}>Ещё не зарегистрированы? <Link className={cl.login__login} to='/signup'>Зарегистрироваться</Link></p>
      </div>
    </section>
  );
};

export default Login;
