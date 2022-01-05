<template>
  <layout class-prefix="layout">
   <NumberPad :value.sync = "record.amount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注"
                palceholder="请在这里输入备注"
                @update:value="onUpdateNotes"
      />
    </div>
    <Tags />
  </layout>
</template>
<script lang="ts" >


import Vue from "vue"
import NumberPad from "@/components/Money/NumberPad.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import {Component} from "vue-property-decorator";
import recordTypeList from "@/constants/recordTypeList";
import Tabs from "@/components/Tabs.vue";

@Component(
    {
      components: {Tabs, FormItem, Tags, NumberPad}})

export default class Money extends Vue{

  get recordList(){
    return this.$store.state.recordList;
  }
  // eslint-disable-next-line no-undef
   record:RecordItem = {
     tags:[],
     notes:'',
     type:'-',
     amount:0,
   };
  recordTypeList = recordTypeList;
   created(){
     this.$store.commit('fetchRecords')
   }
   onUpdateNotes(value:string){
    this.record.notes = value
   }
   saveRecord(){
    this.$store.commit("createRecord",this.record)
   }
}
</script>
<style lang="scss">
.layout-content{
  display:flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>

