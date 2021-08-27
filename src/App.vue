<template>
  <AppHeader ref="app-header" />
  <AppNav ref="app-nav" />
  <main class="app-main">
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
import AppHeader from "./layouts/Header.vue";
import AppNav from "./layouts/Nav.vue";
import { ComponentInternalInstance, getCurrentInstance, onMounted } from "vue";
const currentInstance = getCurrentInstance() as ComponentInternalInstance;
import {basicApi} from 'api';

basicApi.Login({
  username: 'jcf',
  password: '123411156'
}).then((res: any) => {
  console.log(res)
})

onMounted(() => {
  const { refs } = currentInstance as any;
});
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 200px auto;
  grid-template-rows: 50px auto;
  grid-template-areas:
    "header header"
    "nav main";
}
.app-header {
  grid-area: header;
  color: #fff;
  background-color: #f00;
}
.app-nav {
  grid-area: nav;
  color: #fff;
  background-color: #0f0;
}
.app-main {
  grid-area: main;
  background-color: #00f;
  color: #fff;
}
</style>
