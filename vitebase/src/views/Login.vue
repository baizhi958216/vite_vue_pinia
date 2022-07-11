<template>
    <div>
        <!-- ref -->
        {{ id }}-{{ name }}
        <hr>
        <!-- reactive -->
        {{ baizhi.id }}--{{ baizhi.name }}
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, reactive } from 'vue'
const route = useRoute()//获取上层路由传递的参数
// ref
const id = ref(route.query.id)
const name = ref(route.query.name)
// reactive
const baizhi = reactive({
    id: route.query.id,
    name: route.query.name
})
</script>