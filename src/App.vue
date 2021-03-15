<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <header-component v-if="$route.name !='Login' && $route.name !='404'"></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/layout/HeaderComponent';
// import HelloWorld from "./components/HelloWorld.vue";
import "@/assets/style/global.scss";

export default {
  name: "app",
  components: {
    HeaderComponent
  }
};
</script>

<style></style>
