<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
}
</style>
