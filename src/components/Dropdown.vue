<template>
    <select class="form-wrapper" v-model="selectedLocal" :change="$emit('change', selectedLocal)">
      <template v-for="(item, index) in list">
        <option :class="[{option: true}]" :value="index" :key="index">{{item}}</option>
      </template>
    </select>
</template>

<script lang="ts">
import { Component, Model, Prop, Watch, Vue } from "vue-property-decorator";

@Component({
  components: {

  }
})
export default class Dropdown extends Vue {
  @Prop() private type!: string;

  @Model('change', { type: Number }) readonly selected!: number
  selectedLocal: number = 0; // Vue complains not to mutate prop 'selected', so v-model above cannot use that

  // selected: number = 0;
  list: string[] = [];
  professorSortList: string[] = this.$store.state.professorSortList;
  moduleSortList: string[] = this.$store.state.moduleSortList;

  created() {
    this.list = this.type === "module" ? this.moduleSortList : this.professorSortList;
  }
}
</script>

<style scoped lang="scss">

select.form-wrapper { 
  display: block;
    font-size:16px;
    border: 0;
    outline: none;
    background: unset;
    color: $professor;
    margin: 14px 0 0 -6px;
    font-weight: 600;
    font-size: 0.9rem;
}
// https://stackoverflow.com/questions/36702751/how-can-i-customize-a-select-drop-down-box-using-css
// https://www.w3schools.com/howto/howto_custom_select.asp

// select.form-wrapper:focus { 
//     outline:0;
//     background: unset;
//     color:dodgerblue;
// } 
// select.form-wrapper:focus { 
//     outline:0;
//     background: unset;
//     color:dodgerblue;
// } 
// select option {
//     color:black;
//     font-weight:bold;
//     text-overflow:none;
//     padding-right:15px;
// } 
// select.form-wrapper option:hover { 
//     background-color:grey;
//     color:dodgerblue;
//     cursor:pointer 
// }  select.form-wrapper option:focus { 
//     background-color:lightgray;
//     color:dodgerblue;
//     cursor:pointer
// }

// .option {
//   padding: 0;
// }

// .selected:after {
//   position: absolute;
//   content: "";
//   top: 14px;
//   right: 10px;
//   width: 0;
//   height: 0;
//   border: 6px solid transparent;
//   border-color: #fff transparent transparent transparent;
// }

// .selected-arrow:after {
//   border-color: transparent transparent #fff transparent;
//   top: 7px;
// }
</style>