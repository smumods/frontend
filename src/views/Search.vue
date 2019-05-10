<template>
<div>
    <p>Hello World</p>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {

  }
})
export default class Search extends Vue {
    created() {
        console.log(this.$store.state.hello);
    }
}

</script>

<style lang="scss">

</style>

