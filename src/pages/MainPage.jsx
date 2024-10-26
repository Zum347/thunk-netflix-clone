import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms, getGenres, setLoading } from '../app/actions/filmActions';
import Hero from '../components/Hero';
import ListFilms from '../components/ListFilms';

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.filmState);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getGenres());
    dispatch(getFilms());
  }, []);

  if (state.loading) return 'Loading...';

  return (
    <div>
      <Hero />
      <ListFilms title="Popular" fetchUrl="/movie/popular" />
      {state.genres.slice(0, 4).map((genre) => (
        <ListFilms
          key={genre.id}
          title={genre.name}
          fetchUrl={`/discover/movie?with_genres=${genre.id}`}
        />
      ))}
    </div>
  );
};

export default MainPage;