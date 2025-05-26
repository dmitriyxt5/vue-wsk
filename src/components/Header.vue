<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// console.log(router.back());
const back = () => {
  router.back();
};
</script>

<template>
  <header v-if="route.path == '/'" class="header">
    <img class="header__logo" src="/logo-white.png" alt="logo-paris-white" />
  </header>
  <header v-else class="header__sub">
    <img class="back" @click="back" src="/ico-prev.svg" alt="ico-prev" />
    <img
      class="header__logo-sm"
      src="/logo-sm-white.png"
      alt="logo-paris-white"
    />
  </header>
</template>

<style>
.header {
  background: none;
}
.back {
  cursor: pointer;
}
.header__logo {
  margin: 0 auto;
  display: flex;
  padding: 30px;
}
</style>
