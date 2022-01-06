<template>
  <div>
    <layout>
      <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
      <div>
        <ol>
          <li v-for="(group,index) in result" :key="index">
            <h3 class="title">{{ group.title }}</h3>
            <ol>
              <li v-for="item in group.items" :key="item.id"
                  class="record">
                <span>{{ tagString(item.tags) }}</span>
                <span class='notes' :style="{marginRight:auto}">{{ item.notes }}</span>
                <span>￥{{ item.amount }}</span>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </layout>
    <Nav/>

  </div>

</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import Tabs from "@/components/Tabs.vue";
import intervalList from "@/constants/interval";
import recordTypeList from "@/constants/recordTypeList";

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  // eslint-disable-next-line no-undef
  tagString(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.join(",")
  }

  get recordList() {
    // eslint-disable-next-line no-undef
    return (this.$store.state as RootState).recordList
  }

  get result() {
    const {recordList} = this;
    // eslint-disable-next-line no-undef
    type HashTableValue = { title: string, items: RecordItem[] }
    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [data, time] = recordList[i].createdAt!.split('T');
      console.log(data)
      hashTable[data] = hashTable[data] || {title: data, items: []}
      hashTable[data].items.push(recordList[i])
    }
    return hashTable
  }

  beforeCreate() {
    this.$store.commit('fetchRecords')
  }

  type = '-';
  interval = 'day'
  intervalList = intervalList
  recordTypeList = recordTypeList
}
</script>

<style lang="scss" scoped>
::v-deep {
  .type-tabs-item {
    background: white;

    &.selected {
      background: #c4c4c4;

      &::after {
        display: none;
      }
    }
  }

  .interval-tabs-item {
    height: 48px;
  }
}

%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;

}

.title {
  @extend %item;
}

.record {
  background: white;
  @extend %item;

}

.notes {
  margin-right: auto;
  margin-left: 8px;
  color: #999;
}
</style>
