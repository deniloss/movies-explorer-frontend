import React from 'react';
import cl from './SearchForm.module.css';
import Switch from "react-switch";

const SearchForm = ({searchInput, setSearchInput, setChecked, checked, isLoading, onSearch}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSearch();
  }

  return (
    <div className={cl.searchForm}>

      <form noValidate className={cl.searchForm__form} onSubmit={handleSubmit}>
        <input
          className={cl.searchForm__input}
          required
          type="text"
          name='search'
          value={searchInput}
          onChange={(event => setSearchInput(event.target.value))}
          disabled={isLoading}
          placeholder='Введите ключевое слово'
        />
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
