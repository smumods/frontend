<template>
  <!-- TODO: Image clip: https://css-tricks.com/clipping-masking-css/ -->
  <img class="clip-circle" v-if="src" :src="src" :style="`width: ${size}px; height: ${size}px;`">
  <icon-base :width="size" :height="size" v-else name="profile">
    <icon-profile></icon-profile>
  </icon-base>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IconBase from '@/components/icons/IconBase.vue';
import IconProfile from '@/components/icons/IconProfile.vue';

@Component({
  components: {
      IconBase, IconProfile
  },
})
export default class ProfileImage extends Vue{
    @Prop() private src!: string;
    @Prop({default: 20}) private size!: number;
}
</script>

<style scoped lang="scss">
.clip-circle {
    object-fit: cover;
    clip-path: circle(50% at center);
}
</style>
