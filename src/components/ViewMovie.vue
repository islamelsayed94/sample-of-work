<template>
  <div class="movie-details">
    <h2>Movie Details</h2>
    <div v-if="movie" class="movie-details-content">
      <h3 class="movie-title">{{ movie.title }}</h3>
      <p class="movie-description">{{ movie.description }}</p>
      <p class="movie-year">Year: {{ movie.year }}</p>
      <router-link :to="'/movies/' + movie.id + '/edit'" class="edit-link">Edit</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movie() {
      const movieId = this.$route.params.id;
      return this.$store.getters.getMovieById(movieId);
    },
  },
};
</script>

<style scoped>
.movie-details {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.movie-details-content {
  margin-top: 20px;
}

.movie-title {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
}

.movie-description {
  margin: 10px 0;
}

.movie-year {
  font-weight: bold;
  margin: 10px 0;
}

.edit-link {
  text-decoration: none;
  background-color: #007BFF;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
}

.edit-link:hover {
  background-color: #0056b3;
}
</style>
