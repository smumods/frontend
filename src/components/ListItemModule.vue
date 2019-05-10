<template>
  <li>
    <div class="list-item-container">
      <div>
        <span>{{data.subjectArea}}</span>
        <span></span>
      </div>
      <div>
        <span>{{data.moduleCode}}</span>
        <span></span>
      </div>
      <span class="professor">{{data.moduleName}}</span>
      <!-- <span>longlonglonglonglonglong</span> -->
      <span v-if="extraInfoString" class="professor-number">
        {{extraInfoString}}
      </span>
      <span class="professor-number">
        {{data.reviews}}
        <span>✏️</span>
      </span>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProfileImage from "@/components/ProfileImage.vue";

@Component({
  components: {
    ProfileImage
  }
})
export default class ListItemModule extends Vue {
  @Prop() private data!: object;
  @Prop() private dropdown!: number;
  // moduleSortList: string[] = [
  //     "Most number of reviews",
  //     "Most professors teaching",
  //     "Most classes",
  //     "Most vacancies",
  //   ];
//   extraInfo: string = ""

// Errors because data's structure is not defined I think
// Might need to have a schema of some sort??
  get extraInfoString() {
      switch (this.dropdown) {
          case 0:
              return "";
            case 1:
            // @ts-ignore
                return `${this.data.professors.length} 👨‍🏫`;
            case 2:
            // @ts-ignore
                return `${this.data.classes.length} 🏫`;
            case 3:
            // @ts-ignore
                return `${this.data.vacancies} 🈳`;
          default:
              break;
      }
  }
}
</script>

<style scoped lang="scss">
li {
  // Parent container
  > .list-item-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    font-size: 0.8rem;
    width: 100%;
    height: 30px;
    margin-bottom: 14px;
    text-align: center;

    // Subject area tag
    // Requires extra div for vertical centering
    // https://stackoverflow.com/questions/28455100/how-to-center-div-vertically-inside-of-absolutely-positioned-parent-div
    > div {
      text-align: center;
      position: absolute;
      height: 30px;
      white-space: nowrap;

      :first-child {
        background: $background;
        font-weight: 600;
        font-size: 0.9em;
        color: $professor;
        text-transform: uppercase;
        padding: 2px 6px;
        margin: auto 0;

        // For vertically centering
        display: inline-block;
        vertical-align: middle;
      }

      // For centering subject area tag
      // Pseudo element
      :last-child {
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
    }

    // Module Code
    > div:nth-of-type(2) {
      text-align: center;
      position: absolute;
      height: 30px;
      margin-left: 50px;
      white-space: nowrap;

      :first-child {
        background: $background;
        font-weight: 600;
        font-size: 0.9em;
        color: $professor;
        text-transform: uppercase;
        padding: 2px 6px;
        margin: auto 0;

        // For vertically centering
        display: inline-block;
        vertical-align: middle;
      }

      // For centering subject area tag
      // Pseudo element
      :last-child {
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
    }

    // Module name
    > .professor {
      display: inline-block;
      width: 50%;
      overflow-wrap: break-word;
      text-align: left;
      line-height: 1em;
      margin: auto 0 auto 90px;
      padding: 0 2px;
    }

    // Review and Rating
    > .professor-number {
      margin: auto 0;
      padding: 0 2px;
      // Emoji
      > span {
        font-size: 0.7rem;
        margin: auto 0;
      }
    }
  }
}
</style>
