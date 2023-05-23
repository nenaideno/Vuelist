import { createStore } from "vuex";
import { todosAPI } from "../api/api";

const GET_TODOS = "getTodosM"
const COMPLETE_TODO = "completeTodoM"
const DELETE_TODO = "deleteTodoM"
const ADD_TODO = "addTodoM"
const DELETE_ALL = "deleteAllM"

const store = createStore({
    state: () => {
        return {
            todos: []
        }
    },
    mutations: {
        getTodosM(state, payload) {
            state.todos = payload
            localStorage.setItem("todos", JSON.stringify(payload))
        },
        completeTodoM(state, payload) {
            state.todos.forEach(e => e.id === payload && (e.completed = true))
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        deleteTodoM(state, payload) {
            let temp = state.todos.filter(e => e.id !== payload)
            state.todos.splice(0, state.todos.length, ...temp);
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        addTodoM(state, payload) {
            state.todos.push({
                userId: 1,
                id: Date.now(),
                title: payload,
                completed: false
            })
            localStorage.setItem("todos", JSON.stringify(state.todos))
        }
    },
    actions: {
        async getTodos(context) {
            let responce = await todosAPI.getTodos()
            context.commit(GET_TODOS, responce.data)
        },
        setTodos(context) {
            const payload = JSON.parse(localStorage.getItem("todos"))
            context.commit(GET_TODOS, payload)
        },
        completeTodo(context, payload) {
            context.commit(COMPLETE_TODO, payload)
        },
        deleteTodo(context, payload) {
            context.commit(DELETE_TODO, payload)
        },
        addTodo(context, payload) {
            context.commit(ADD_TODO, payload)
        },
    },
    getters: {
        getTodosG(state) {
            return state.todos
        },
        getTodosByQueryG: (state) => (query) => {
            return state.todos.filter(e => e.title.toLowerCase().includes(query.toLowerCase()));
        }
    }
})

export default store