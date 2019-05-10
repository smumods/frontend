<template>
  <div id="app">
    <span v-show="!searchText" class="nav-title">SMUMods</span>
    <nav-tabs v-show="!searchText"></nav-tabs>
    <search-bar v-model="searchText"></search-bar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div>-->
    <router-view class="router"/>
  </div>
</template>

<script>
import NavTabs from "@/components/NavTabs.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  components: {
    NavTabs,
    SearchBar
  },
  data() {
    return {
      searchText: ""
    };
  },
  watch: {
    searchText() {
      if (
        this.$router.currentRoute.name === "home" &&
        this.searchText.length > 0
      ) {
        // console.log("Searching");
        this.$router.push({
          name: "search"
          // , params: { userId: '123' }
        });
      } else if (
        this.$router.currentRoute.name === "search" &&
        !this.searchText
      ) {
        this.$router.push({ name: "home" });
      }
    }
  }
  // ...
};
</script>

<style lang="scss">
@import "./styles/_variables.scss";

// @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,900');
@import url("https://rsms.me/inter/inter.css");

#app {
  box-sizing: border-box;
  // font-family: "Source Sans Pro", sans-serif;
  font-family: "Inter", sans-serif;
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
