<template>
<li>
    <div class="list-item-container">
        <div><span>{{data.school}}</span><span></span></div>
        <profile-image size="30" :src="data.src"></profile-image>
        <!-- <profile-image size="30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReY7jn19D31upqxfVtdyq6USfW9NlwZRLYb82sJMD9AndH8eY"></profile-image> -->
        <span class="professor">{{data.name}}</span>
        <!-- <span>longlonglonglonglonglong</span> -->
        <span class="professor-number">{{data.reviews}}<span>✏️</span></span>
        <span class="professor-number">{{data.rating}}<span>⭐️</span></span>
    </div>
</li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProfileImage from '@/components/ProfileImage.vue';

@Component({
  components: {
      ProfileImage
  },
})
export default class ListItemProfessor extends Vue{
    @Prop() private data!: object;
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

        // School tag
        // Requires extra div for vertical centering
        // https://stackoverflow.com/questions/28455100/how-to-center-div-vertically-inside-of-absolutely-positioned-parent-div
        > div {
            text-align: center;
            position: absolute;
            height: 30px;
            white-space: nowrap;

            span:first-child {
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

            // For centering school tag
            // Pseudo element
            span:last-child {
                height: 100%;
                display: inline-block;
                vertical-align: middle;
            }
        }
        
        // Image
        > img, svg {
            position: absolute;
            margin: 0 0 0 68px;
        }

        // Prof name
        > .professor {
            display: inline-block;
            width: 45%;
            overflow-wrap: break-word;
            text-align: left;
            line-height: 1em;
            margin: auto 0 auto 104px;
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
