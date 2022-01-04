<template>
<div>
  <layout>
    <Types :value.sync= "record.type" />
  </layout>
<Nav />
</div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class Statistics extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
