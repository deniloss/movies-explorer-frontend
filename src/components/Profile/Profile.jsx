import React from 'react';
import {useNavigate} from "react-router";

import Navigation from "../Navigation/Navigation";
import cl from './Profile.module.css'

const Profile = (props) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    setName(props.name);
    setEmail(props.email);
  }, []);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleEmailChange = (evt) => {
    evt.preventDefault();
    setEmail(evt.target.value);
  }
  const handleNameChange = (evt) => {
    evt.preventDefault();
    setName(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleLogOut();
    navigate('/', {replace: true})
  }

  const handleChangeProfile = () => {
    props.handleUpdateUser(name, email);
  }


  return (
    <>
      <Navigation/>
      <section className={cl.profile}>
        <h1 className={cl.profile__title}>Привет, {props.name}!</h1>

        <form noValidate onSubmit={handleSubmit} className={cl.profile__form} action="">
          <div className={cl.profile__formItem}>
            <p className={cl.profile__titleInput}>Имя</p>
            <input
              className={cl.profile__input}
              onChange={handleNameChange}
              value={name || ''}
              type="text"
              name='name'
            />
          </div>
          <div className={cl.profile__formItem}>
            <p className={cl.profile__titleInput}>E-mail</p>
            <input
              className={cl.profile__input}
              onChange={handleEmailChange}
              value={email || ''}
              type="email"
              name='email'
            />
          </div>


          <button type='button' onClick={handleChangeProfile} className={cl.profile__button}>Редактировать</button>
          <button type='submit' className={cl.profile__button}> Выйти из аккаунта</button>
        </form>
      </section>
    </>

  );
};

export default Profile;
