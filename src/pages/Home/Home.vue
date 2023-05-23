<script setup>
import { useRouter } from 'vue-router';

let router = useRouter()

const navigate = () => {
    router.push("/todos")
}

</script>

<template>
    <div class="home">
        <h1>Vuelist</h1>
        <span>Vue 3 Todo list template</span>
        <p>Template of todo list created for evaluation purposes using Vue 3 functionality and Composition API</p>
        <div class="home-btn">
            <button @click="navigate">Go to list</button>
            <span>*Or just click on the button on the top right</span>
        </div>
    </div>
</template>

<style src="./Home.scss" scoped lang="scss"></style>