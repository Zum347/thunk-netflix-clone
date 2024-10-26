import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const baseUrl = 'https://image.tmdb.org/t/p/original/';

const Hero = () => {
  const navigate = useNavigate();
  const state = useSelector((store) => store.filmState);
  const index = Math.floor(Math.random() * 20);
  const film = state.popularFilms[index];

  return (
    <div className="row bg-dark text-light p-4">
      <div className="col-md-6 gap-3 d-flex flex-column justify-content-center">
        <h1>{film?.title}</h1>
        <p className="text-warning">IMDB: {film?.vote_average}</p>
        <p>{film?.overview}</p>
        <div className="d-flex gap-3 justify-content-center">
          <button
            className="btn  btn-danger"
            onClick={() => navigate(`/movie/${film.id}`)}
          >
            Şimdi İzle
          </button>
          <button className="btn  btn-primary">Listeye Kaydet</button>
        </div>
      </div>

      <div className="col-md-6 d-flex align-items-center">
        <img className="w-100 shadow" src={`${baseUrl}${film?.backdrop_path}`} />
      </div>
    </div>
  );
};

export default Hero;