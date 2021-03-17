<template>
  <div id="app">
    <HeaderComponent
      v-if="$route.name != 'Login' && $route.name != '404'"
    ></HeaderComponent>
    <el-main>
      <router-view></router-view>
    </el-main>
    <footer-component
        v-if="$route.name != 'Login' && $route.name != '404'"
    ></footer-component>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import HeaderComponent from "./components/layout/HeaderComponent";
import FooterComponent from "./components/layout/FooterComponent";

import "@/assets/style/global.scss";

export default {
  name: "app",
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style></style>
