<template>
  <div class="dialog-bg">
    <div class="dialog">
      <div>{{ title }}</div>
      <!-- 普通slot内容 -->
      <!-- <slot/> -->
      <!-- 提供后备(默认)内容的slot -->
      <slot>
        <p style="font-size: 40px;color: blue;">后备内容</p>
      </slot>
      <!-- 输入框 -->
      <div><input type="text"></div>
      <!-- 按钮组 -->
      <div class="btn-group">
        <button :class="[buttonConfirmStyle]" @click="confirm(conf)">确定</button>
        <button :class="[buttonCancelStyle]" @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    buttonConfirmStyle:{
      type:String,
      default:''
    },
    buttonCancelStyle:{
      type:String,
      default:''
    },
    conf:{
      type:String
    }
  },
  data() {
    return {

    }
  },
  methods: {
    cancel() {
      this.$emit('close')
    },
    confirm(pr){
      console.log(`${pr}子组件的confirm`);
    }
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
.btnConfirm{
  background-color: rgba(85, 221, 85, 0.781);
}
.btnCncel{
  background-color: rgba(255, 0, 0, 0.425);
}
</style>