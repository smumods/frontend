<template>
  <div class="home">
    <div class="discover-prof">
      <span>Discover Professors</span>
      <dropdown></dropdown>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Dropdown from '@/components/Dropdown.vue';

@Component({
  components: {
    Dropdown
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
  background-color: $background;
}

.discover-prof {
  margin: 10px 0;
  padding: 16px 10px;
  background-color: $white;
}

.discover-prof span {
  font-weight: 900;
  font-size: 1.5rem;
}
</style>
