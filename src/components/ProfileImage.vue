<template>
  <!-- TODO: Image clip: https://css-tricks.com/clipping-masking-css/ -->
  <img class="clip-circle" v-if="src" :src="src">
  <icon-base width="88" height="88" v-else name="profile">
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
}
</script>

<style scoped lang="scss">
.clip-circle {
    width: 88px;
    height: 88px;
    object-fit: cover;
    clip-path: circle(40px at center);
}
</style>
