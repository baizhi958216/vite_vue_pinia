<template>
  <div class="dialog-bg">
    <div class="dialog">

      <slot name="toat"></slot>

      <slot name="weather" :wea="weadatas"></slot>

      <input type="text" v-model="modelValue" @keyup.enter="confirm" @keyup.esc="cancel">

      <div class="btn-group">
        <button @click="confirm">确定</button>
        <button @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['weadatas', 'modelValue'],
  data() {
    return {
    }
  },
  // 窗体删除后执行
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmount');
  },
  methods: {
    confirm() {
      this.$emit('update:model-value', this.modelValue)
      this.$emit('close',
        [
          {
            'message': 'Dialog will be close, the value is ' + this.modelValue
          },
          {
            'emit': 'GoodJob'
          }
        ]
      )
    },
    cancel() {
      this.$emit('close')
    },
  }
}
</script>

<style scoped>
.dialog-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  text-align: center;
}

.dialog {
  width: 300px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 200px;
  background-color: #e4e4e4;
}

.btn-group {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}
</style>