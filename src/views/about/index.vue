<template>
  <div class="count-container">
    <el-button size="mini" @click="add">+</el-button>
    <span class="num">{{ numValue }}</span>
    <el-button size="mini" @click="minus">-</el-button>
  </div>
</template>

<script setup lang="ts">
import { useState, useActions } from 'store/helpers';
import { computed, watch } from 'vue';

const { num } = useState('count', ['num']);

watch(num, (num, prenum) => {
  console.log(num, prenum);
});

const numValue = computed(() => num.value);

const { add, minus } = useActions('count', ['add', 'minus']);
</script>

<style lang="scss" scoped>
.count-container {
  display: flex;
  align-items: center;
  width: 200px;
  margin: 20px auto 0;
  .num {
    margin: 0 10px;
  }
}
</style>
