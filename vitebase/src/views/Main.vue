<template>
    <div>
        <button @click="gotoPage1('page1')">Page1</button>
        <button @click="gotoPage2('page2')">Page2</button>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
function gotoPage1(page) {
    router.push(
        {
            path: '/main/' + page
        }
    )
}
function gotoPage2(page) {
    router.push(
        {
            path: '/main/' + page
        }
    )
}
</script>