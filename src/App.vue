<template>
  <div id="app">
    <h4 class="title is-4">SMUMods</h4>
    <div class="tabs is-toggle is-fullwidth">
      <ul>
        <li class="is-active">
          <a>
            <span class="icon is-small">
              <i class="fas fa-image" aria-hidden="true"></i>
            </span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small">
              <i class="fas fa-music" aria-hidden="true"></i>
            </span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small">
              <i class="fas fa-film" aria-hidden="true"></i>
            </span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small">
              <i class="far fa-file-alt" aria-hidden="true"></i>
            </span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style>
#app {
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif;
}

.title {
  text-align: center;
  padding: 10px 0;
  font-weight: bold;
  color: #0085FD;
}
</style>
