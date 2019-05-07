<template>
  <div class="search-container">
    <div @click="focus">
      <icon-base icon-name="search">
        <icon-search/>
      </icon-base>
    </div>
    <input ref="search" @keyup.esc="search = ''" placeholder="Search profs or modules" v-model="search">
    <div @click="search = ''" v-show="search.length > 0">
      <icon-base icon-name="clear">
        <icon-clear/>
      </icon-base>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import IconBase from "@/components/icons/IconBase.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconClear from "@/components/icons/IconClear.vue";

@Component({
  components: {
    IconBase,
    IconSearch,
    IconClear
  }
})
export default class SearchBar extends Vue {
  //   @Prop({default: 0}) private active!: number;
  search: string = "";

  // When search icon is clicked, focus on input
  // Using ref of input "search"
  focus (): void {
    let theField = <HTMLInputElement>this.$refs.search;
    theField.focus();
  }
}
</script>

<style scoped lang="scss">
.search-container {
  display: flex;
  align-content: center;
  padding: 8px 0;
}

.search-container input {
  outline: none;
  flex-grow: 1;
  font-size: 1rem;
  color: $black;
  border: 0;
}

// Change placeholder text color
.search-container input::placeholder {
  color: $grey;
  opacity: 1; /* Firefox */
}

// Search icon
.search-container div:first-child svg {
  margin: 12px 16px 12px 26px;
  color: $grey;
}

// Force container to not move
// Somehow when clear icon appears, there is 10px created below it
// Making it 54px
// Test again next time and remove if necessary
.search-container div {
  height: 44px;
}

// Clear icon
.search-container div:last-child svg {
  margin: 12px 16px;
  color: $primary;
  cursor: pointer;
}
</style>