<template>
  <ul class="tab-container">
    <li>Discover</li>
    <li>Professors</li>
    <li>Modules</li>
    <li>Profile</li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavTabs extends Vue {
  // @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.tab-container {
  list-style-type: none;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>