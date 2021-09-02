<template>
  <ComponentA />
  <ComponentB />
</template>

<script setup lang="tsx">
import {
  withModifiers,
  ref,
  ComponentCustomProps,
  AsyncComponentOptions,
  defineAsyncComponent,
} from 'vue';

const count = ref(0);
const changeCount = () => {
  count.value++;
};

const ComponentA: ComponentCustomProps = {
  render(): JSX.Element {
    return (
      <>
        <el-button onClick={withModifiers(changeCount, ['self'])}>
          修饰点击计数
        </el-button>
        <div>{count.value}</div>
        <el-button onClick={changeCount}>没有修饰点击</el-button>
      </>
    );
  },
};

const ComponentB: AsyncComponentOptions = defineAsyncComponent(
  () =>
    new Promise((resolve: (value: AsyncComponentOptions) => void, reject) => {
      setTimeout(() => {
        resolve({
          render(): JSX.Element {
            return <h2>2222</h2>;
          },
        });
      }, 5000);
    })
);
</script>
