import React from 'react';

import Navigation from "../Navigation/Navigation";

import cl from './Profile.module.css'

const Profile = ({ name, email, handleLogOut }) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogOut()
  }

  return (
    <>
      <Navigation/>
      <section className={cl.profile}>


        <h1 className={cl.profile__title}>Привет, {props.name}!</h1>

        <form className={cl.profile__form} action="">
          <div className={cl.profile__formItem}>
            <p className={cl.profile__titleInput}>Имя</p>
            <input
              className={cl.profile__input}
              value={name || ''}
              type="text"
            />
          </div>
          <div className={cl.profile__formItem}>
            <p className={cl.profile__titleInput}>E-mail</p>
            <input
              className={cl.profile__input}
              value={email || ''}
              type="email"
            />
          </div>


          <button className={cl.profile__button}>Редактировать</button>
          <button type='submit' onSubmit={handleSubmit} className={cl.profile__button}> Выйти из аккаунта</button>
        </form>
      </section>
    </>

  );
};

export default Profile;
