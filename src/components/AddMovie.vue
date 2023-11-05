<template>
    <div class="add-movie">
        <h2>Add Movie</h2>
        <form @submit.prevent="addMovie" class="movie-form">
            <div class="form-group">
                <label>Title:</label>
                <input type="text" v-model="title" class="form-control" />
                <span class="error-message">{{ titleErrorMessage }}</span>

            </div>

            <div class="form-group">
                <label>Year:</label>
                <input type="number" v-model="year" class="form-control" />
                <span class="error-message">{{ yearErrorMessage }}</span>

            </div>

            <div class="form-group">
                <label>Description:</label>
                <textarea v-model="description" class="form-control"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Add Movie</button>
        </form>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMovieValidation } from './movieValidation';
import store from '../Store'; // Import your Vuex store
import router from '../router/router'; // Import your Vue Router
export default defineComponent({
    setup() {
        const { handleSubmit, title, year } = useMovieValidation();
        const description = ref("");
        // Define the generateUniqueId function here
        function generateUniqueId() {
            return Math.random().toString(36).substr(2, 9);
        }
        const addMovie = handleSubmit(async () => {
            // Check if form is valid
            if (title.value && year.value) {
                const newMovie = {
                    title: title.value,
                    description: description.value,
                    year: year.value,
                    id: generateUniqueId(),
                };
                // Dispatch the action to add the movie
                store.dispatch("addMovie", newMovie);
                // Navigate to the MovieList page
                router.push({ name: "MovieList" });
            }
        });

        return {
            title: title.value,
            year: year.value,
            description: description,
            titleErrorMessage: title.errorMessage,
            yearErrorMessage: year.errorMessage,
            addMovie,
        };
    },
});
</script>

<style scoped>
.add-movie {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.movie-form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin: 10px 0;
}

label {
    font-weight: bold;
}

.error-message {
    color: red;
}

.form-control {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.btn {
    background-color: #007BFF;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
}

.btn:hover {
    background-color: #0056b3;
}
</style>
