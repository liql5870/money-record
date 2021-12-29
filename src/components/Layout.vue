<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class Layout extends Vue {

}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content {
    border: 1px solid red;
    flex-grow: 1;
    overflow: auto;
  }
}
</style>
