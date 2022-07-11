import { createApp } from "vue";
import App from "./App.vue";

// 引入路由
import { createRouter, createWebHistory } from "vue-router";

let routes = [
    {path:'/login',component:()=>import('./views/Login.vue')},
    {path:'/test',component:()=>import('./views/test.vue')}
]

const router = createRouter({
    // createWebHistory: HTML5模式
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount("#app")
