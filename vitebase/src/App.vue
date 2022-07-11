<template>
  <div>
    <p>{{ a }}</p>
    <button @click="changeName">Change</button>
    <hr>
    <div v-for="(item, index) of OEM">
      {{ item.id }}-{{ item.name }}
    </div>
    <button @click="changeOEM">OEMChange</button>
    <hr>
    <div>{{c}}</div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted,watch, computed } from 'vue'
let a = ref('张三')

function changeName() {
  a.value = '李四'
}

const OEM = reactive([{
  id: 1,
  name: 'ASUS'
}, {
  id: 2,
  name: 'Lenoeo'
}, {
  id: 3,
  name: 'Xiaomi'
}])

function changeOEM() {
  OEM[1].name = 'Acer'
}

// watch在组合式API不需要deep监听
watch(OEM,(val)=>{
  console.log(val);
})

// computed
const c = computed(()=>{
  return new Date().getFullYear()
})

onMounted(() => {
  console.log('Mounted');
})

onUnmounted(() => {
  console.log('Unmounted');
})
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
