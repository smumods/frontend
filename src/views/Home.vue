<template>
  <div class="home">
    <div class="card">
      <span>Discover Professors</span>
      <dropdown type="professor"></dropdown>
      <div class="top-three-professors">
        <div class="top-professor" v-for="(prof, index) in top3Professors" :key="index">
          <!-- <profile-image :src="prof.src"></profile-image> -->
          <profile-image
            :size="88"
            :src="'https://peopledotcom.files.wordpress.com/2017/11/harry-meghan-15.jpg?crop=0px%2C0px%2C2000px%2C1050px&resize=1200%2C630'"
          ></profile-image>
          <p>{{prof.name}}</p>
          <div>
            <p>
              {{prof.reviews}}
              <span>✏️</span>
            </p>
            <p>
              {{prof.rating}}
              <span>⭐️</span>
            </p>
          </div>
        </div>
      </div>
      <ul class="top-list">
        <list-item-professor
          v-for="(professor, index) in top3Professors"
          :key="index"
          :data="professor"
        ></list-item-professor>
      </ul>
      <b-button class="view-more" type="is-text">View More</b-button>
    </div>
    <div class="card">
      <span>Discover Modules</span>
      <dropdown type="module" v-model="selectedModuleDropdown"></dropdown>
      <ul class="top-list">
        <list-item-module
          v-for="(module, index) in topModules"
          :key="index"
          :data="module"
          :dropdown="selectedModuleDropdown"
        ></list-item-module>
      </ul>
      <b-button class="view-more" type="is-text">View More</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Dropdown from "@/components/Dropdown.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import ListItemProfessor from "@/components/ListItemProfessor.vue";
import ListItemModule from "@/components/ListItemModule.vue";

@Component({
  components: {
    Dropdown,
    ProfileImage,
    ListItemProfessor,
    ListItemModule
  }
})
export default class Home extends Vue {
  // Need the top 8 professors from backend
  // View more will load either a new page or re-query more??
  top3Professors: Array<Object> = this.$store.state.topProfessors;
  topModules: Array<Object> = this.$store.state.topModules;

  selectedModuleDropdown: number = 0;

}
</script>

<style scoped lang="scss">
.home {
  background-color: $background;
}

.card {

  > .top-three-professors {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 14px 0;
    align-items: stretch;
  }

  > .top-list {
    margin-top: 14px;
  }

  > .view-more {
    color: $primary;
    width: 100%;
    text-transform: uppercase;
    text-decoration: none;
  }

  > span {
    font-weight: 900;
    font-size: 1.4rem;
  }
}

// Top professor container


// Top Professor
.top-professor {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0;
  padding: 0 12px;
  justify-content: space-between;
  font-size: 0.8rem;
}

// Top professor name
.top-professor > p {
  font-weight: 600;
  margin: 8px 0;
  text-align: center;
  line-height: 1rem;
}

// Review and rating of professor
.top-professor > div:last-child {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-self: flex-end;
}

.top-professor > div:last-child > p > span {
  font-size: 0.8rem;
}

// Select middle top professor
.top-three-professors > div:nth-child(2) {
  padding: 6px 12px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
  margin-top: -8px;
}
</style>
