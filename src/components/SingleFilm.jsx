import React from 'react';
import { baseUrl } from './Hero';
import { Link, useNavigate } from 'react-router-dom';

const SingleFilm = ({ film }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/movie/${film.id}`)} className="film">
      <img src={`${baseUrl}${film.backdrop_path}`} />
    </div>
  );
};

export default SingleFilm;