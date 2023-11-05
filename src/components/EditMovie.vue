<template>
  <div class="edit-movie">
    <h2>Edit Movie</h2>
    <form @submit.prevent="updateMovie" class="edit-form">
      <div class="form-group">
        <label for="title" class="label">Title:</label>
        <input type="text" v-model="updatedMovie.title" id="title" class="input" />
      </div>
      <div class="form-group">
        <label for="year" class="label">Year:</label>
        <input type="number" v-model="updatedMovie.year" id="year" class="input" />
      </div>
      <div class="form-group">
        <label for="description" class="label">Description:</label>
        <textarea v-model="updatedMovie.description" id="description" class="input"></textarea>
      </div>
      <button type="submit" class="submit-button">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updatedMovie: {
        id: null,
        title: '',
        description: '',
        year: '',
      },
    };
  },
  created() {
    // Retrieve the movie ID from the route
    const movieId = this.$route.params.id;

    // Access the movie data from the Vuex store using the getter
    const movie = this.$store.getters.getMovieById(movieId);

    // Check if the movie exists before setting it in the data
    if (movie) {
      this.updatedMovie = { ...movie };
    }
  },
  methods: {
    updateMovie() {
      // Update the movie in the Vuex store
      this.$store.dispatch('updateMovie', this.updatedMovie);
      this.$router.push({ name: 'MovieList' });

      // Update the movie in local storage (optional)

      // Navigate back to the movie details or movie list
      // (Add navigation logic based on your app's requirements)
    },
  },
};
</script>

<style scoped>
.edit-movie {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.edit-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin: 10px 0;
}

.label {
  font-weight: bold;
}

.input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.submit-button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 10px;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
