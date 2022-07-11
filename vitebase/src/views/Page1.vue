<template>
    <div>
        {{counter}}
    </div>
</template>
<script setup>
import { defineStore,storeToRefs } from "pinia"
import { testStore } from "../stores/TestStore"

const counter = testStore()

</script>