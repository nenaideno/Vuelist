<script setup>
import { RouterLink } from 'vue-router'
name: "Header";
</script>

<template>
    <div class="header">
        <router-link to="/"><img src="./../../assets/vue.svg" alt="Vue logo"></router-link>
        <div class="header-menu">
            <router-link to="/todos">Todos</router-link>
        </div>
    </div>
</template>

<style src="./Header.scss" lang="scss" scoped></style>