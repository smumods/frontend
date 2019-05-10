<template>
  <div class="search-container">
    <div :class="[{'icon-container': true}, {active: searchLocal}]" @click="focusOrBack">
      <icon-base :icon-name="searchLocal ? 'back' : 'search'">
        <icon-search v-if="!searchLocal"/>
        <icon-back v-else/>
      </icon-base>
    </div>
    <input ref="search" @keyup.esc="searchLocal = ''" placeholder="Search profs or modules" v-model="searchLocal" :change="$emit('change', searchLocal)">
    <div class="icon-container" @click="searchLocal = ''" v-show="searchLocal.length > 0">
      <icon-base icon-name="clear">
        <icon-clear/>
      </icon-base>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Model, Vue } from "vue-property-decorator";
import IconBase from "@/components/icons/IconBase.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconClear from "@/components/icons/IconClear.vue";
import IconBack from "@/components/icons/IconBack.vue";

@Component({
  components: {
    IconBase,
    IconSearch,
    IconClear, IconBack
  }
})
export default class SearchBar extends Vue {

  @Model('change', { type: String }) readonly search!: string
  searchLocal: string = ""; // Vue complains not to mutate prop 'selected', so v-model above cannot use that

  // When search icon is clicked, focus on input
  // Using ref of input "search"
  focusOrBack (): void {
    if (!this.searchLocal) {
      let theField = <HTMLInputElement>this.$refs.search;
      theField.focus();
    } else {
      this.searchLocal = "";
      this.$router.go(-1); // Might have problem in the future??
    }
    
  }
}
</script>

<style scoped lang="scss">

.search-container {
  display: flex;
  align-content: center;
  padding: 8px 0;

  input {
    outline: none;
    flex-grow: 1;
    font-size: 1rem;
    color: $black;
    border: 0;
  }

  // Change placeholder text color
  input::placeholder {
    color: $grey;
    opacity: 1; /* Firefox */
  }

  // Left icon
  // Required class to be declared
  // To avoid unwanted 10px 
  > .icon-container {
    display: flex;
    align-items: center;

    // Inactive state
    > svg {
      margin: 12px 16px 12px 26px;
      color: $grey;
    }
  }

  // Right icon
  > div:last-child svg {
    margin: 12px 16px;
    color: $primary;
    cursor: pointer;
  }

  // Active state
  > .active > svg {
      color: $primary;
  } 
}

svg {
  cursor: pointer;
}
</style>