import { createRouter, createWebHistory } from 'vue-router';
import AddMovie from '../components/AddMovie.vue';
import MovieList from '../components/MovieList.vue';
import ViewMovie from "../components/ViewMovie.vue";


// import ViewMovie from '../components/ViewMovie.vue';
import EditMovie from '../components/EditMovie.vue';



// const routes = [
//   { path: '/add-movie', component: AddMovie },
//   {path: '/movies-list',component: MovieList},

//   {
//     path: '/movie/:id',
//     name: 'ViewMovie',
//     component: ViewMovie,
//   },
//   { path: '/edit/:id',
//   name: 'EditMovie',
//   component: EditMovie,},



// ];
const routes = [
    { path: '/movies', name: 'MovieList',component: MovieList },
    { path: '/movies/add', component: AddMovie },
    // { path: '/movies/:id', component: ViewMovie },
    { path: '/movies/:id', name: 'ViewMovie', component: ViewMovie },
    // { path: '/movies/:id/edit', component: EditMovie },
    { path: '/movies/:id/edit', name: 'EditMovie', component: EditMovie }
    // { path: '/', redirect: '/movies' },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;
