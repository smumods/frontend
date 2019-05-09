<template>
<li>
    <div>
        <span></span>
        
    </div>
</li>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
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
    }
}



</style>
