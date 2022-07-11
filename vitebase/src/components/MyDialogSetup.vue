<template>
    <div class="dialog-bg">
        <div class="dialog">

            <slot name="toat"></slot>

            <slot name="today" :wea="weadatas"></slot>

            <input type="text" v-model="modelValue" @keyup.enter="confirm" @keyup.esc="cancel">

            <div class="btn-group">
                <button @click="confirm">确定</button>
                <button @click="cancel">取消</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
    weadatas: {
        type: String,
        default: ''
    },
    modelValue: {
        type: String,
        default: ''
    }
})

const emit = defineEmits({})

function confirm(params) {
    emit('update:model-value', props.modelValue)
    emit('close',
        [
            {
                'message': 'Dialog will be close, the value is ' + props.modelValue
            },
            {
                'emit': 'GoodJob'
            }
        ]
    )
}
function cancel(params) {
    emit('close')
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