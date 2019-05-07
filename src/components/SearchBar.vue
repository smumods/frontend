<template>
  <div class="search-container">
    <icon-base icon-name="search">
      <icon-search/>
    </icon-base>
    <input placeholder="Search profs or modules" v-model="search">
    <div v-on:click="clear()" v-show="search.length > 0">
      <icon-base icon-name="clear" >
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
  search: string = ""

  clear (): void {
    this.search = "";
    console.log("hello")
  }
}
</script>

<style scoped lang="scss">
.search-container {
  display: flex;
  align-content: center;
}

.search-container input {
  outline: none;
  flex-grow: 1;
  font-size: 1rem;
  color: $black;
}

.search-container input::placeholder {
  color: $grey;
  opacity: 1; /* Firefox */
}

.search-container svg:first-child {
  margin: 12px 16px 12px 26px;
  color: $grey;
}

.search-container div {
  display: inline;
  height: 44px;
}

.search-container div svg:last-child {
  margin: 12px 16px;
  color: $primary;
}
</style>