<template>
  <div id="app">
    <span class="nav-title">SMUMods</span>
    <nav-tabs></nav-tabs>
    <search-bar></search-bar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div>-->
    <router-view class="router"/>
  </div>
</template>

<script>
import NavTabs from "@/components/NavTabs.vue"
import SearchBar from "@/components/SearchBar.vue"

export default {
  components: {
    NavTabs, SearchBar
  },
  // ...
}
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

@import "./styles/_variables.scss";

// @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,900');
@import url('https://rsms.me/inter/inter.css');

#app {
  box-sizing: border-box;
  // font-family: "Source Sans Pro", sans-serif;
  font-family: 'Inter', sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav-title {
  display: block;
  text-align: center;
  margin: 14px 0;
  font-size: 1.5em;
  color: $primary;
  font-weight: 700;
}

.router {
  flex-grow: 1;
}
</style>
