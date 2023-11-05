<template>
  <div id="app">
    <nav class="app-nav">
      <router-link to="/movies/add" class="nav-link">Add Movie</router-link>
      <router-link to="/movies" class="nav-link">Go to Movies List</router-link>
      <!-- Add links to other views -->
    </nav>
    <router-view class="app-content"></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-nav {
  background-color: #007BFF;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

}

.nav-link {
  text-decoration: none;
  color: #fff;
  margin: 0 20px;
}

.app-content {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f4f4f4;
}
</style>
