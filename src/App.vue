<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header/Header.vue';

</script>


<template>
  <div class="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<style lang="scss" src="./App.scss" scoped></style>
