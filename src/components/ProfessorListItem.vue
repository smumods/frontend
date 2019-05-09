<template>
<li>
    <div>
        <span>socsc</span>
        <profile-image class="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReY7jn19D31upqxfVtdyq6USfW9NlwZRLYb82sJMD9AndH8eY"></profile-image>
        <span></span>
        <span></span>
        <span></span>
    </div>
</li>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfileImage from '@/components/ProfileImage.vue';

@Component({
  components: {
      ProfileImage
  },
})
export default class ProfessorListItem extends Vue{
    
}
</script>

<style scoped lang="scss">
li {
    // Parent container
    > div {
        display: flex;
        flex-direction: row;
        align-content: center;
        width: 100%;

        .profile-image {
            width: 20px;
            height: 20px;
        }

        // School
        > span:first-child {
            background: $background;
            font-weight: 600;
            font-size: 0.9rem;
            color: $professor;
            text-transform: uppercase;
            // letter-spacing: 0;
            text-align: center;
            // line-height: 19px;
        }
    }
}



</style>
