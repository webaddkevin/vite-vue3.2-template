<template>
  <EmitTest
    @change="changeTest"
    v-model="input"
    v-model:testValue="testValue"
    v-model:startTime="dateTime.startTime"
    v-model:endTime="dateTime.endTime"
  />

  <p>统计点击次数： {{ emitInfo.clickNum }}</p>
  <p>测试双向绑定属性： {{ testValue }}</p>
  <p>
    开始时间： {{ dateTime.startTime }}
    <br />
    结束时间：{{ dateTime.endTime }}
  </p>
</template>

<script setup lang="ts">
import { reactive, toRef, ref } from 'vue';
import EmitTest from '@/components/EmitTest.vue';
const emitInfo = reactive({
  clickNum: 0,
  updateNum: 0,
});

const dateTime = reactive({
  startTime: null,
  endTime: null,
});
const input = ref('1111');
const testValue = ref('这是一个测试属性');
const clickNumRef = toRef(emitInfo, 'clickNum');
const changeTest = () => {
  clickNumRef.value++;
  console.log(input.value);
};
</script>
