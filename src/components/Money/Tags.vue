<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class Tags extends Vue {

}
</script>

<style lang="scss" scoped>
.tags{
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  > .current{
    display: flex;
    > li{
      $h:48px;
      background:#d9d9d9;
      height: 24px;
      line-height: $h/2;
      border-radius: 12px;
      padding: 0 16px;
      margin-right: 12px;
    }

  }
  > .new{
    padding-top: 16px ;
    button{
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }

  }
}
</style>
