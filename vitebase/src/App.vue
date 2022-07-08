<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>{{ text1 }}</p>
  <button @click=updateval>更新</button>
  <p>{{ text2 }}</p>
  <button @click=updateval1>更新</button>
  <p>{{ `今天的天气是：${this.weather}现在的时间是：${new Date().toISOString()}` }}</p>
  <p>{{ computedinfo }}</p>
</template>

<script>
export default {
  data () {
    return {
      text1: 'Vue2',
      text2: {
        name: 'Vue2',
        author: 'EvanYou'
      },
      weather: '晴天'
    }
  },
  methods: {
    updateval () {
      this.text1 = 'Vue3'
    },
    updateval1 () {
      this.text2.name = 'Vue3'
    }
  },
  watch: {
    text1 (newVlaue, oldValue) {
      console.log(newVlaue, oldValue)
    },
    //当侦听的某个变量值是对象时不起作用
    //则需要深度监听
    text2: {
      handler (newVlaue, oldValue) {
        console.log(newVlaue, oldValue)
      },
      deep: true
    },
    //因为数据同源, text2中newValue跟oldValue值一致
    //如果想要得到不同的值需要结合计算属性computed。
    datadiff: {
      handler (newVlaue, oldValue) {
        console.log(newVlaue, oldValue)
      },
      deep: true
    }
  },
  computed: {
    datadiff () {
      return JSON.parse(JSON.stringify(this.text2))
    },
    computedinfo () {
      return `今天的天气是：${this.weather}现在的时间是：${new Date().toISOString()}`
    }
  },
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
