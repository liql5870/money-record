<template>
    <button class="button"
    @click="$emit('click',$event)">
      <slot />
    </button>
</template>

<script lang='ts'>
import {Component, Vue} from "vue-property-decorator"

@Component
export default class Button extends Vue {

}
</script>

<style lang='scss' scoped>
.button {
  background: #767676;
  color: white;
  border-radius: 4px;
  height: 40px;
  width: 150px;
  padding: 0 16px;
  border: none;

}
</style>