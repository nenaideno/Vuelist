<script setup>

import {ref, onMounted, computed} from "vue"
import {useStore} from "vuex"
name: "Todos"

const store = useStore()

let todosList = ref(store.getters.getTodosG)
let query = ref("")
let todoTitle = ref("")

onMounted(() => {
    !localStorage.getItem("todos") ? store.dispatch("getTodos").then(() => {
        todosList.value = store.getters.getTodosG
    }) : store.dispatch("setTodos").then(() => {
        todosList.value = store.getters.getTodosG
    })
})

const completeTodo = (id) => {
    store.dispatch("completeTodo", id)
}

const deleteTodo = (id) => {
    store.dispatch("deleteTodo", id).then(() => {
        query.value ? todosList.value = store.getters.getTodosByQueryG(query.value) : todosList.value = store.getters.getTodosG
    })
}

const addTodo = () => {
    store.dispatch("addTodo", todoTitle.value).then(() => {
        todosList.value = store.getters.getTodosG
    })
    todoTitle.value = ""
    
}

const changeQuery = () => {
    todosList.value = store.getters.getTodosByQueryG(query.value)
    console.log(todosList.value)
}


</script>

<template>
    <div class="todos">
        <div class="todos-actions">
            <label>
                <span>Search :</span>
                <input @input="() => changeQuery()" v-model="query" type="text">
            </label>
            <div class="actions-add">
                <input v-model="todoTitle" type="text">
                <button @click="() => addTodo()">Add Todo</button>
            </div>
        </div>
        <div v-for="(todo, index) in todosList" :key="todo.id" class="todos-item">
            <h2>{{ todo.title }}</h2>
            <button @click="() => deleteTodo(todo.id)" v-if="todo.completed" class="completed">Delete</button>
            <button @click="() => completeTodo(todo.id)" v-else class="item-complete">Complete</button>
        </div>
    </div>
</template>

<style src="./Todos.scss" scoped lang="scss"></style>