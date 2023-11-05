

// src/store/index.js

import { createStore } from 'vuex';

export default createStore({
  state: {
    movies: JSON.parse(localStorage.getItem('movies')) || [],
  },
  mutations: {
    ADD_MOVIE(state, movie) {
      state.movies.push(movie);
      localStorage.setItem('movies', JSON.stringify(state.movies));
    },
    UPDATE_MOVIE(state, updatedMovie) {
      const index = state.movies.findIndex((movie) => movie.id === updatedMovie.id);
      if (index !== -1) {
        state.movies[index] = updatedMovie;
        localStorage.setItem('movies', JSON.stringify(state.movies));
      }
    },
    setMovies(state, movies) {
      state.movies = movies;
    },
    // Other mutations...
  },
  actions: {
    addMovie({ commit }, movie) {
      commit('ADD_MOVIE', movie);
    },
    updateMovie({ commit }, updatedMovie) {
      commit('UPDATE_MOVIE', updatedMovie);
    },
    // Other actions...
  },
  getters: {
    getMovieById: (state) => (id) => {
      return state.movies.find((movie) => movie.id === id);
    },
    // Other getters...
  },
});




