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
        {{message}}
    </div>
</template>
<script setup>
import { defineStore, storeToRefs } from "pinia"
import { testStore } from "../stores/TestStore"

const counter = testStore()

let {id,title,message} = storeToRefs(counter)
const msg = message.value
function testClick() {
    counter.count++
    message.value=msg+' '+counter.count
}

function testAction() {
    counter.testAction()
}
</script>