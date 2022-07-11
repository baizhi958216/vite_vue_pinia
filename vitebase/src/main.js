import { createApp } from "vue";
import App from "./App.vue";

// 引入路由
import { createRouter, createWebHashHistory } from "vue-router";

let routes = [
    {path:'/',component:()=>import('./views/Login.vue')},
    {path:'/test',component:()=>import('./views/test.vue')}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App).use(router).mount("#app")
