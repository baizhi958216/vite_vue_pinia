import { defineStore, storeToRefs } from "pinia";
export const cart = defineStore("cart", {
  state: () => {
    return {
      products: [],
    };
  },
  actions: {
    addProduct(product, quantity) {
      let productIndex = this.products.findIndex((p) => {
        if (product.id == p.product.id) {
          return -1;
        } else {
          return 0;
        }
      });
      if (productIndex != -1) {
        // 商品存在
        this.products[productIndex].quantity += quantity;
      } else {
        this.products.push({
          product: product,
          quantity: 1,
        });
      }
    },
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },
  },
});
