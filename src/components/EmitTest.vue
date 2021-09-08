<template>
  <div>
    <el-button type="primary" size="mini" @click="emit('change')">
      点击事件
    </el-button>
    <el-button
      type="warning"
      size="mini"
      @click="emit('update:testValue', '2222')"
    >
      更新属性
    </el-button>
    <el-input v-bind="$attrs" placeholder="请输入内容"></el-input>
    <el-date-picker
      v-model="dateTime"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></el-date-picker>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

interface EmitProps {
  (e: 'change'): void;
  (e: 'update:testValue', testValue: string): void;
  (e: 'update:startTime', startTime: Date): void;
  (e: 'update:endTime', endTime: Date): void;
}
interface Props {
  testValue: String;
  startTime: Date;
  endTime: Date;
}

const emit = defineEmits<EmitProps>();

const props = defineProps<Props>();
const dateTime = computed({
  get: () => {
    if (props.startTime && props.endTime) {
      return [props.startTime, props.endTime];
    } else {
      return [];
    }
  },
  set: (value: any) => {
    let startTime, endTime;
    if (value?.length) {
      startTime = value[0];
      endTime = value[1];
    } else {
      startTime = null;
      endTime = null;
    }
    emit('update:startTime', startTime);
    emit('update:endTime', endTime);
  },
});
</script>
