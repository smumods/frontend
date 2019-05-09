<template>
  <div class="home">
    <div class="discover-prof">
      <span>Discover Professors</span>
      <dropdown></dropdown>
      <div class="top-three-professors">
        <div class="top-professor" v-for="(prof, index) in top3Professors" :key="index">
          <!-- <profile-image :src="prof.src"></profile-image> -->
          <profile-image :src="'https://peopledotcom.files.wordpress.com/2017/11/harry-meghan-15.jpg?crop=0px%2C0px%2C2000px%2C1050px&resize=1200%2C630'"></profile-image>
          <p>{{prof.name}}</p>
          <div>
            <p>{{prof.reviews}}<span> ✏️</span></p>
            <p>{{prof.rating}}<span> ⭐️</span></p>
          </div>
        </div>
      </div>
      <ul>
        
      </ul>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Dropdown from '@/components/Dropdown.vue';
import ProfileImage from '@/components/ProfileImage.vue';

@Component({
  components: {
    Dropdown, ProfileImage
  },
})
export default class Home extends Vue {

  top3Professors: Array<Object> = [
    {
      src: "",
      name: "Alice, ZHANG Lin",
      reviews: 440,
      rating: 4.9
    },
    {
      src: "",
      name: "Udom Paowsong",
      reviews: 382,
      rating: 4.9
    },
    {
      src: "",
      name: "Carl Wildner",
      reviews: 483,
      rating: 4.7
    }
  ]
}
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

.discover-prof>span {
  font-weight: 900;
  font-size: 1.4rem;
}

// Top professor container
.top-three-professors {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 8px;
  align-items: stretch;
}

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
.top-professor>p {
  font-weight: 600;
  margin: 8px 0;
  text-align: center;
  line-height: 1rem;
  
}

// Review and rating of professor
.top-professor>div:last-child {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-self: flex-end;
}

.top-professor>div:last-child>p>span {
  font-size: 0.8rem;
}

// Select middle top professor
.top-three-professors>div:nth-child(2) {
  padding: 6px 12px;
  box-shadow: 0 2px 20px 0 rgba(0,0,0,0.10);
  margin-top: -8px;
}

</style>
