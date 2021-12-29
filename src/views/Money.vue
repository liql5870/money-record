<template>
<div class="nav-wrapper">
<div class="content">

</div>
  <Nav />
</div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class Money extends Vue {

}
</script>

<style lang="scss" scoped>
.nav-wrapper{
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height:100vh;
  .content{
    flex-grow: 1;
    overflow:auto;
  }
}

</style>
