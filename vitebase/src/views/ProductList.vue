<template>
    <div>
        <div class="product" v-for="(item, index) of products">
            <div class="image">
                <img :src="serve_url + item.images" alt="">
            </div>
            <div class="info">
                <div>{{ item.name }}</div>
                <div class="des">{{ item.describe }}</div>
                <div class="card-sty"><button @click="addProduct(item)">添加到购物车</button></div>
            </div>
        </div>
        <div>
            <cartview></cartview>
        </div>
    </div>

</template>

<script setup>

import { ref, reactive } from 'vue'
import { cart } from '../stores/CartStore'
import cartview from '../components/MyCart.vue'
let myCart = cart()
let serve_url = 'http://apitest01.laixuexi.top:8080/'

function addProduct(prod) {
    myCart.addProduct(prod, 1)
}

let products = reactive([
    {
        "id": 324544028930118,
        "group_id": 324544028930117,
        "name": "面包",
        "price": 13,
        "describe": "吃了一个面包，你就不会饿了",
        "tags": "[{\"type\":\"颜色\",\"value\":\"咖啡色\"}]",
        "images": "/upload/1.jpg",
        "stock": 23,
        "sell": null,
        "update_time": 1657071182063
    },
    {
        "id": 324544028930119,
        "group_id": 324544028930117,
        "name": "水果沙拉",
        "price": 15,
        "describe": "好吃是好吃，但是吃了还会饿",
        "tags": "[{\"type\":\"颜色\",\"value\":\"彩色\"}]",
        "images": "/upload/2.jpg",
        "stock": 131,
        "sell": null,
        "update_time": 1657071182063
    },
    {
        "id": 324544028930120,
        "group_id": 324544028930117,
        "name": "鸡蛋",
        "price": 23,
        "describe": "鸡蛋好吃",
        "tags": "[{\"type\":\"颜色\",\"value\":\"茶白色\"}]",
        "images": "/upload/3.jpg",
        "stock": 50,
        "sell": null,
        "update_time": 1657071182063
    },
    {
        "id": 324544028930121,
        "group_id": 324544028930117,
        "name": "水果",
        "price": 13,
        "describe": "水果果果果果果果！",
        "tags": "[{\"type\":\"颜色\",\"value\":\"橙色\"}]",
        "images": "/upload/4.jpg",
        "stock": 20,
        "sell": null,
        "update_time": 1657071182063
    },
    {
        "id": 324544028930122,
        "group_id": 324544028930117,
        "name": "咖啡",
        "price": 33,
        "describe": "特困生的救星（专治犯困）",
        "tags": "[{\"type\":\"颜色\",\"value\":\"咖啡色\"}]",
        "images": "/upload/5.jpg",
        "stock": 10,
        "sell": null,
        "update_time": 1657071182063
    }
])

</script>

<style lang="scss" scoped>
.product {
    display: flex;
    margin-top: 30px;

    .image {
        width: 80px;
        height: 80px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .info {
        padding: 0px 10px;

        .des {
            color: rgb(126, 126, 126);
            font-size: 12px;
        }

        .card-sty {
            margin-top: 10px;
        }
    }
}
</style>