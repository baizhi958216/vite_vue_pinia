<template>

  {{ weather }}
  <button @click="showDialog = !showDialog">窗口</button>
  <MyDialogSetupVue v-model="weather" v-if="showDialog" @close="closeDialog" :weadatas="weather">
    <template v-slot:toat>今日天气</template>
    <template v-slot:today="todayProp"><br/>{{todayProp.wea}}<hr/></template>
  </MyDialogSetupVue>
</template>

<script setup>
import { ref, reactive } from 'vue'
import MyDialogSetupVue from './components/MyDialogSetup.vue'
let showDialog = ref(false)
let weather = '晴天'
function closeDialog() {
  showDialog.value = false
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
