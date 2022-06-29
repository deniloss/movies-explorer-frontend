import React from 'react';

import Navigation from "../Navigation/Navigation";

import cl from './Profile.module.css'

const Profile = (props) => {

  const [name, setName] = React.useState(props.name);

  const [email, setEmail] = React.useState(props.email);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleLogOut();
  }

  //todo Сделать функцию изменения профиля

  return (
    <>
      <Navigation/>
      <section className={cl.profile}>
        <h1 className={cl.profile__title}>Привет, {name}!</h1>

        <form onSubmit={handleSubmit} className={cl.profile__form} action="">
          <div className={cl.profile__formItem}>
            <p className={cl.profile__titleInput}>Имя</p>
            <input
              className={cl.profile__input}
              onChange={setName}
              value={name || ''}
              type="text"
            />
          </div>
          <div className={cl.profile__formItem}>
            <p className={cl.profile__titleInput}>E-mail</p>
            <input
              className={cl.profile__input}
              onChange={setEmail}
              value={email || ''}
              type="email"
            />
          </div>


          <button className={cl.profile__button}>Редактировать</button>
          <button type='submit' className={cl.profile__button}> Выйти из аккаунта</button>
        </form>
      </section>
    </>

  );
};

export default Profile;
