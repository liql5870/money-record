<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "~@/assets/styles/helper.scss";
@import "~@/assets/styles/reset.scss";

body {
  line-height: 1.5;
  font-family: $font-hei;
  color: #333;
  font-size: 16px;
  background: #f5f5f5;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
#app {
  max-width: 500px;
  margin: 0 auto;
 box-shadow: 0 0 1px #000;
}
</style>
