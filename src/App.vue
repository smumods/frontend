<template>
  <div id="app">
    <span class="nav-title">SMUMods</span>
    <nav-tabs></nav-tabs>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<script>
import NavTabs from "./components/NavTabs.vue"

export default {
  components: {
    NavTabs
  },
  // ...
}
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

@import "./styles/_variables.scss";

// Variables



@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,900');

#app {
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif;
}

.nav-title {
  display: block;
  text-align: center;
  margin: 10px 0;
  font-size: 1.5em;
  color: $primary;
  font-weight: 700;
}
</style>
