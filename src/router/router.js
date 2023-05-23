import { createRouter, createWebHistory } from "vue-router"
import Home from "./../pages/Home/Home.vue"
import Todos from "./../pages/Todos/Todos.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/todos",
            name: "Todos",
            component: Todos
        }
    ]
})

export default router