import React from 'react';


import cl from './SearchForm.module.css';
import Switch from "react-switch";

const SearchForm = ({ setInput, inputValue, onSubmit, setChecked, checked }) => {

  return (
    <div className={cl.searchForm}>

      <form className={cl.searchForm__form} onSubmit={onSubmit}>
        <input
          className={cl.searchForm__input}
          required type="text"
          onChange={setInput}
          placeholder={inputValue || ''}/>
        <button type="submit" className={cl.searchForm__formButton}>Найти</button>
      </form>

      <div className={cl.searchForm__shortFilms}>
        <Switch
          checked={checked}
          onChange={setChecked}
          height={20}
          width={36}
          onColor="#2BE080"
          onHandleColor="#FFF"
          uncheckedIcon={false}
          checkedIcon={false}
        />
        <p className={cl.searchForm__ShortFilmsText}>Короткометражки</p>
      </div>

    </div>
  );
};

export default SearchForm;
