import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmsByUrl } from '../app/actions/filmActions';
import { baseUrl } from './Hero';

const FilmDetail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const params = useParams();

  useEffect(() => {
    getFilmsByUrl(`/movie/${params.movieId}`).then((res) => setMovieDetail(res));
  }, []);

  console.log(movieDetail);
  if (!movieDetail) return 'Loading...';

  return (
    <div className="d-flex bg-dark text-light movie-detail">
      <div className="d-flex justify-content-center">
        <img className="w-50 " src={`${baseUrl}${movieDetail.poster_path}`} />
      </div>
      <div className="movie-info">
        <h1>{movieDetail.title}</h1>
        <p>{movieDetail.overview}</p>
        <div className="row row-cols-2">
          <div>
            <p>Maliyet: {movieDetail.budget} $</p>
            <p>Hasılat: {movieDetail.revenue} $</p>
            <p>Kar: {movieDetail.revenue - movieDetail.budget} $</p>
            <p>IMDB: {movieDetail.vote_average} $</p>
          </div>
          <div>
            <div>
              Diller:
              {movieDetail?.spoken_languages?.map((lang) => (
                <p className="badge badge-primary">{lang.name}</p>
              ))}
            </div>
            <div>
              Kategori:
              {movieDetail?.genres?.map((genre) => (
                <p className="badge badge-primary">{genre.name}</p>
              ))}
            </div>
            <div>
              Yapımcı:
              {movieDetail?.production_companies?.map((comp) => (
                <p className="badge badge-primary">{comp.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;