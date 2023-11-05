<template>
    <div class="movie-list">
        <h2>Movie List</h2>
        <ul class="movie-list-ul">
            <li v-for="movie in movies" :key="movie.id" class="movie-list-item">
                <router-link :to="{ name: 'ViewMovie', params: { id: movie.id } }" class="movie-link">
                    {{ movie.title }} (Year: {{ movie.year }} )
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            movies: [],
        };
    },
    beforeMount() {
        // Retrieve movies from local storage
        const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
        if (storedMovies.length) {
            this.movies = storedMovies;
            this.$store.commit('setMovies', storedMovies); // Update the Vuex store with movies from local storage
        }
    },
};
</script>

<style scoped>
.movie-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.movie-list-ul {
    list-style: none;
    padding: 0;
}

.movie-list-item {
    margin: 10px 0;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.movie-link {
    text-decoration: none;
    color: #007BFF;
}

.movie-link:hover {
    text-decoration: underline;
}
</style>
