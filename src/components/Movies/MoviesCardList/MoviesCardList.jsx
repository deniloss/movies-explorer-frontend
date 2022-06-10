import React from 'react';

import cl from './MoviesCardList.module.css';

import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = () => {
  return (
    <section className={cl.CardList}>
      <ul className={cl.CardList__container}>
        <MoviesCard title='33 слова о дизайне' time='1ч 37м' desc='О дизайне' />
        <MoviesCard title='33 слова о дизайне' time='1ч 37м' desc='О дизайне' />
        <MoviesCard title='33 слова о дизайне' time='1ч 37м' desc='О дизайне' />
        <MoviesCard title='33 слова о дизайне' time='1ч 37м' desc='О дизайне' />
        <MoviesCard title='33 слова о дизайне' time='1ч 37м' desc='О дизайне' />
        <MoviesCard title='33 слова о дизайне' time='1ч 37м' desc='О дизайне' />
        <MoviesCard title='33 слова о дизайне' time='1ч 37м' desc='О дизайне' />
        <MoviesCard title='33 слова о дизайне' time='1ч 37м' desc='О дизайне' />
        <MoviesCard title='33 слова о дизайне' time='1ч 37м' desc='О дизайне' />
        <MoviesCard title='33 слова о дизайне' time='1ч 37м' desc='О дизайне' />
        <MoviesCard title='33 слова о дизайне' time='1ч 37м' desc='О дизайне' />
        <MoviesCard title='33 слова о дизайне' time='1ч 37м' desc='О дизайне' />
      </ul>

      <button className={cl.CardList__more}>Ещё</button>
    </section>

  );
};

export default MoviesCardList;
