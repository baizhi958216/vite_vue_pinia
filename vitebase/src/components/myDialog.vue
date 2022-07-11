<template>
  <div class="dialog-bg">
    <div class="dialog">
      <!-- header -->
      <header>
        <slot name="header" :wid="'数据'" :dss="'啊大大'" />
      </header>
      <!-- main -->
      <main>
        <slot name="main" />
      </main>
      <!-- footer -->
      <footer>
        <slot name="footer" />
      </footer>
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