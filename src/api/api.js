import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

export const todosAPI = {

    getTodos: () => {
        return instance.get("/todos?_page=1")
    }
}