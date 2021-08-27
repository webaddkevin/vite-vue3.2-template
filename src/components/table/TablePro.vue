<template>
  <el-table
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    v-bind="$attrs"
  >
    <template v-for="(col, i) in columns" :key="col.customKey || i">
      <el-table-column v-if="col.nest" v-bind="col">
        <template v-if="col.nest === 'slot'">
          <slot :name="col.nestSlotName" v-bind="col" />
        </template>
        <template v-else-if="col.nestColumns && col.nestColumns.length">
          <el-table-column v-for="nestCol in col.nestColumns" v-bind="nestCol">
            <template v-if="nestCol.headerSlotName" #header="scope">
              <slot :name="nestCol.headerSlotName" v-bind="scope"></slot>
            </template>
            <template v-if="nestCol.slotName" #header="scope">
              <slot :name="nestCol.slotName" v-bind="scope"></slot>
            </template>
          </el-table-column>
        </template>
      </el-table-column>
      <el-table-column v-else v-bind="col">
        <template v-if="col.headerSlotName" #header="scope">
          <slot :name="col.headerSlotName" v-bind="scope"></slot>
        </template>
        <template v-if="col.slotName" #default="scope">
          <slot :name="col.slotName" v-bind="scope"></slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script setup lang="ts">
import { PropType, withDefaults } from "vue";
interface Props {
  paginat?:boolean;
  loading?:boolean;
  columns: any[];
}
const props = withDefaults(defineProps<Props>(), {});

// const props = defineProps({
//   paginat: Boolean,
//   columns: {
//     type: Array as PropType<any[]>,
//     default: () => [],
//   },
//   loading: Boolean,
// });
</script>
