<template>
  <ul class="tab-container">
    <li>
      <div :class="[{'nav-icon-title': true}, {'active': active === 0}]">
        <icon-base icon-name="discover"><icon-discover /></icon-base>
        <span>Discover</span>
      </div>
    </li>
    <li>
      <div :class="[{'nav-icon-title': true}, {'active': active === 1}]>
        <icon-base icon-name="professor"><icon-professor /></icon-base>
        <span>Professors</span>
      </div>
    </li>
    <li>
      <div :class="[{'nav-icon-title': true}, {'active': active === 2}]>
        <icon-base icon-name="module"><icon-module /></icon-base>
        <span>Modules</span>
      </div>
    </li>
    <li>
      <div :class="[{'nav-icon-title': true}, {'active': active === 3}]>
        <icon-base icon-name="profile"><icon-profile /></icon-base>
        <span>Profile</span>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import IconBase from '@/components/icons/IconBase.vue';
import IconDiscover from '@/components/icons/IconDiscover.vue';
import IconProfessor from '@/components/icons/IconProfessor.vue';
import IconModule from '@/components/icons/IconModule.vue';
import IconProfile from '@/components/icons/IconProfile.vue';

@Component({
  components: {
    IconBase, IconDiscover, IconProfessor, IconModule, IconProfile
  },
})
export default class NavTabs extends Vue {
  @Prop({default: 0}) private active!: number;

  get myComputedProp() {
    return Math.random()
  }
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

.nav-icon-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-icon-title span {
  font-size: 0.9em;
  margin-top: 4px;
}

.active {
  color: $primary;
}
</style>