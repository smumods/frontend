<template>
  <div id="app">
    <span class="title">SMUMods</span>
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

// Set your colors
$primary: #0085FD;
$primary-invert: findColorInvert($primary);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Variables

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,900');

#app {
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif;
}

.title {
  display: block;
  text-align: center;
  padding: 10px 0;
  font-size: 1.5em;
  color: $primary;
  font-weight: 700;
}
</style>
