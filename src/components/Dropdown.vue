<template>
  <div class="custom-select">
    <select >
      <template v-for="(item, index) in professorSortList">
        <option :value="index" :key="index">{{item}}</option>
      </template>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export default class Dropdown extends Vue {
  professorSortList: string[] = [
    "Overall best",
    "Most reviews",
    "Highest rated",
    "Marking leniency",
    'Level of "fun"',
    "Amount of work"
  ];

}
</script>

<style lang="scss">
.custom-select {
  height: 22px;
  width: 100%;
}

.custom-select select {
  border: 0;
  outline: none;
}
</style>