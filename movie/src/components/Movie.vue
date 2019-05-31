<template>
  <div class="hello">
    <h1>Movie</h1>
    <input type="text" v-model="keyword">
  </div>
</template>

<script>
import { getMoviesDatasByKeyword } from "../services/apiCalls";
import _ from "lodash";

export default {
  name: "Movie",
  data: () => ({
    keyword: "",
    movies: {}
  }),
  methods: {
    async fetchMovies() {
      const movies = await getMoviesDatasByKeyword(this.keyword);
      this.movies = movies;
    }
  },
  watch: {
    keyword: function() {
      this.debouncedGetMovies();
    }
  },

  created() {
    this.debouncedGetMovies = _.debounce(this.fetchMovies, 500);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
