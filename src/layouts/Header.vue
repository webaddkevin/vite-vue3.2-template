<template>
  <header class="app-header">
    <el-button type="primary" size="mini">返回</el-button>
    头部
  </header>
</template>

<script setup lang="ts">
import {
  ComponentInternalInstance,
  getCurrentInstance,
  onMounted,
  defineExpose,
} from "vue";
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
// 全局api
const globalProperties = appContext.config.globalProperties;
const name = "AppHeader";
const color = "#fff";

defineExpose({
  name,
  color,
});
onMounted(() => {
  // globalProperties.$message.error("测试");
});
</script>

<style scoped>
header {
  color: v-bind(color);
}
</style>
