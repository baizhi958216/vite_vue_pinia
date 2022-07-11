<template>
    <div>
        {{ counter }}
        <br>
        {{ counter.count }}
        <br>
        <button @click="testClick">count++</button>
        <br>
        <button @click="testAction">count*=2</button>
        <br>
        <!-- storeToRefs -->
        {{ message }}
        <br>
        <!-- state -->
        {{ counter.testCount }}
        <!-- state: 这种需要定义属性名再引用 -->
        {{ ccss }}
    </div>
</template>
<script setup>
import { defineStore, storeToRefs } from "pinia"
import { testStore } from "../stores/TestStore"

const counter = testStore()

// { 初始变量名:变量名 }
let { id, title, message, testCount: ccss } = storeToRefs(counter)

const msg = message.value
function testClick() {
    counter.count++
    message.value = msg + ' ' + counter.count
}

function testAction() {
    counter.testAction()
}
</script>