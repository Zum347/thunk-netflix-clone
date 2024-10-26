import React, { useEffect, useState } from 'react';
import { getFilmsByUrl } from '../app/actions/filmActions';
import SingleFilm from './SingleFilm';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const ListFilms = ({ title, fetchUrl }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilmsByUrl(fetchUrl).then((res) => setFilms(res.results));
  }, []);

  return (
    <div className="bg-dark text-light p-4">
      <h1>{title}</h1>
      <Splide options={{ autoWidth: true, gap: 10, pagination: false }}>
        {films.map((film) => (
          <SplideSlide>
            <SingleFilm film={film} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ListFilms;