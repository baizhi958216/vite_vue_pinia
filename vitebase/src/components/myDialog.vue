<template>
  <div class="dialog-bg">
    <div class="dialog">
      <h1>
        <!-- 向父组件传递strData, 保存在strssss -->
        <slot :strssss="strData" name="n_str">
          {{ strData.name }}
        </slot>
      </h1>
      <h1>
        <!-- 向父组件传递strData, 保存在strssss -->
        <slot :strssss="strData" name="j_str">
          {{ strData.job }}
        </slot>
      </h1>
      <div class="btn-group">
        <button>确定</button>
        <button @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['weadatas'],
  data() {
    return {
      strData: {
        name: 'baizhi958216',
        job: 'SE'
      }
    }
  },
  methods: {
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