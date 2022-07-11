<template>
    <div>
        <button @click="toLogin">click for Login</button>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()//获取上层路由传递的参数
const router = useRouter()
function toLogin() {
    router.push({
        path: '/login',
        query: {
            name: 'baizhi958216',
            id: 1
        }
    })
}
</script>