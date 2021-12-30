<template>
  <div id="app">
 <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "~@/assets/styles/helper.scss";
@import "~@/assets/styles/reset.scss";

body{
  line-height: 1.5;
  font-family:$font-hei;
  color: #333;
  font-size: 16px;
}
.clearfix::after{
  content:'';
  display: block;
  clear:both

}

</style>
