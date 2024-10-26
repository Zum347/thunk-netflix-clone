import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  popularFilms: [],
  loading: false,
  genres: [],
};

export const filmReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_FILMS:
      return {
        ...state,
        popularFilms: payload,
        loading: false,
      };
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_GENRES:
      return {
        ...state,
        genres: payload,
      };

    default:
      return state;
  }
};