<template>
  <div>home</div>
  <div>{{ dateFormat('YYYY-MM-DD hh:mm:ss') }}</div>
  <TablePro
    :row-style="rowStyle"
    border
    :columns="columns"
    :data="tableData"
    :paginat="true"
    :total="10"
    :current-page="1"
    :page-size="10"
  >
    <template #ageHeader="scope">
      {{ scope.column.label }}
    </template>
    <template #age="{ row }">今年{{ row.age }}</template>
  </TablePro>
</template>

<script setup lang="ts">
import { computed, CSSProperties, watch } from 'vue';
import { useMutation, useState } from 'store/helpers';
import TablePro from 'components/table/TablePro.vue';
// import { mapMutations,useStore } from "vuex";

// 辅助函数使用
// const mappedMutations = mapMutations("basic", ["SET_TOKEN"]);
// const $store = useStore();
// const setToken = mappedMutations.SET_TOKEN.bind({ $store })
// setToken("222")

const columns = [
  { label: '姓名', prop: 'name' },
  {
    label: '年龄',
    prop: 'age',
    headerSlotName: 'ageHeader',
    slotName: 'age',
  },
];
const tableData = [
  { name: '小米', age: 18 },
  { name: '小米', age: 18 },
  { name: '小米', age: 18 },
];

const { SET_TOKEN } = useMutation('basic', ['SET_TOKEN']);
SET_TOKEN('2222');

const { token } = useState('basic', ['token']);
const tokenValue = token.value;
console.log(tokenValue);

/******* 方法 *******/
const rowStyle = ({ rowIndex }: any): CSSProperties => {
  let backgroundColor = rowIndex % 2 ? '#ccc' : '';
  return {
    backgroundColor,
  };
};
</script>
