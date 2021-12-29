<template>
<div>
  <router-link to="/money">
    <Icon name="money" />
    记账
  </router-link>
  <router-link to="/labels">
    <Icon name="label" />
    标签</router-link>
  <router-link to="/statistics">
    <Icon name="statistics" />
    统计</router-link>
</div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"


@Component
export default class Nav extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
