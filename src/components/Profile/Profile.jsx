import React from 'react';
import {useNavigate} from "react-router";

import Navigation from "../Navigation/Navigation";
import cl from './Profile.module.css'
import {useFormWithValidation} from "../../utils/ReactValidation";
import {CurrentUserContext} from "../../context/currentUserContext";

const Profile = ({
                   setSuccessMessage,
                   setErrorMessage,
                   errorMessage,
                   handleLogOut,
                   handleUpdateUser,
                   successMessage
                 }) => {
  const navigate = useNavigate();

  const formWithValidation = useFormWithValidation();
  const {name, email} = formWithValidation.values;
  const {values, setValues, handleChange, errors, isValid} = formWithValidation;
  const [isEdited, setIsEdited] = React.useState(false);

  const currentUser = React.useContext(CurrentUserContext);

  let isChanged = (currentUser.name !== values.name) || (currentUser.email !== values.email);

  React.useEffect(() => {
    setValues(currentUser);
    setSuccessMessage(false);
    setErrorMessage(false);
  }, [])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogOut();
    navigate('/', {replace: true})
  }

  const handleChangeProfile = () => {
    setIsEdited(true);
    handleUpdateUser(name, email);
    setSuccessMessage(true);
  }


  return (
    <>
      <Navigation/>
      <section className={cl.profile}>
        <h1 className={cl.profile__title}>Привет, {currentUser.name}!</h1>

        <form noValidate onSubmit={handleSubmit} className={cl.profile__form} action="">
          <div className={cl.profile__formItem}>
            <p className={cl.profile__titleInput}>Имя</p>
            <input
              className={cl.profile__input}
              onChange={handleChange}
              value={values.name || ''}
              type="text"
              name='name'
              required
            />
          </div>
          <span className={`${cl.profile__error} ${cl.profile__error_visible}`}>&nbsp;{errors.name}</span>
          <div className={cl.profile__formItem}>
            <p className={cl.profile__titleInput}>E-mail</p>
            <input
              className={cl.profile__input}
              onChange={handleChange}
              value={values.email || ''}
              type="email"
              name='email'
              required
            />
          </div>
          <span className={`${cl.profile__error} ${cl.profile__error_visible}`}>&nbsp;{errors.email}</span>

          <p className={`${cl.profile__successMessage} ${!isChanged || !isValid && cl.profile__successMessage_visible}`}>Данные
            успешно обновлены</p>
          <p className={cl.profile__Error}>{errorMessage}</p>
          <button type='button' disabled={!isValid && !isChanged} onClick={handleChangeProfile}
                  className={cl.profile__button}>Редактировать
          </button>
          <button type='submit' className={cl.profile__button}> Выйти из аккаунта</button>
        </form>
      </section>
    </>

  );
};

export default Profile;
