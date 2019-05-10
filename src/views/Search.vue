<template>
<div class="search">
    <div class="card">
      <span>Professor(s)</span>
      <ul class="professor-list">
        <list-item-professor
          v-for="(professor, index) in top3Professors"
          :key="index"
          :data="professor"
        ></list-item-professor>
      </ul>
    </div>
    <div class="card">
      <span>Module(s)</span>
      <ul class="professor-list">
        <list-item-module
          v-for="(module, index) in topModules"
          :key="index"
          :data="module"
        ></list-item-module>
      </ul>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ListItemProfessor from "@/components/ListItemProfessor.vue";
import ListItemModule from "@/components/ListItemModule.vue";

@Component({
    components: {
        ListItemModule, ListItemProfessor
  }
})
export default class Search extends Vue {

    top3Professors: Array<Object> = this.$store.state.topProfessors;
    topModules: Array<Object> = this.$store.state.topModules;

    get searchText() {
        return this.$store.state.searchText
    }

    created() {
        console.log(this.$store.state.searchText);
    }
}

</script>

<style lang="scss">
.search {
    background-color: $background;
}

.card {

    > span {
        font-weight: 900;
        font-size: 1.4rem;
    }

    .professor-list {
        margin-top: 14px;
    }

}
</style>

