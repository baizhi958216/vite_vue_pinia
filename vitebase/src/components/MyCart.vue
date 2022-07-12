<template>
    <div>
        <div class="product" v-for="(item, index) of myCart.products">
            <div class="image">
                <img :src="serve_url + item.product.images" alt="">
            </div>
            <div class="info">
                <div>{{ item.product.name }}</div>
                <div class="des">{{ item.product.describe }}</div>
                <div class="card-sty">
                    <button @click="updateQuantity(item.product, -1)">-1</button>
                    {{ item.quantity }}
                    <button @click="updateQuantity(item.product, 1)">+1</button>
                </div>
            </div>
        </div>
        <div>{{myCart.totalPrice}}</div>
    </div>
</template>

<script setup>
import { cart } from '../stores/CartStore'

let myCart = cart()

let serve_url = 'http://apitest01.laixuexi.top:8080/'

function updateQuantity(prod, quantity) {
    myCart.addProduct(prod, quantity)
}
</script>

<style scoped>
</style>