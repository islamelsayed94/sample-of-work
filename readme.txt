npm run serve

This will start a development server,
and you can access the application in your web browser at http://localhost:8080.

Features
Add Movie
Click on the "Add Movie" link in the navigation to access the "Add Movie" form.
Fill in the movie title, year, and description.
Click the "Add" button to add the movie to the system.
The added movie will be stored in both Vuex and local storage.

List Movies
The "Movies List" page displays all the movies currently available.
Movies are listed in a grid, showing their titles, years, and descriptions.
You can view the details of a specific movie by clicking "View Details."

Edit Movie
To edit a movie, click the "Edit" button next to the movie you want to edit.
You will be redirected to the "Edit Movie" page.
Update the movie's title, year, or description.
Click the "Save" button to save the changes.
The movie data will be updated in both Vuex and local storage.

View Movie Item
To view the details of a movie, click "View Details" on the "Movies List" page.
You will be redirected to the "Movie Details" page.
Here, you can see the movie's title, year, and description.

Data Persistence
Movie data is stored in Vuex for state management.
Movie data is also stored in the browser's local storage for persistence across sessions.

Important Notes
Ensure you have an active internet connection for the application to work correctly.
Changes made to movies, such as edits and additions, will be saved in both Vuex and local storage.
Conclusion
The Movie Management System is a simple yet effective Vue.js application for managing movie data. You can easily add, view, edit, and list movies, and the data is stored locally to maintain state across sessions