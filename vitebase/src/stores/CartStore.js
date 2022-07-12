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
        return product.id == p.product.id;
      });
      if (productIndex != -1) {
        // 商品存在
        this.products[productIndex].quantity += quantity;
        if (this.products[productIndex].quantity == 0) {
          this.products.splice(productIndex, 1);
        }
      } else {
        this.products.push({
          product: product,
          quantity: 1,
        });
      }
    },
  },
  getters: {
    totalPrice(state) {
      let total = 0;
      for (const product of state.products) {
        total += product.quantity * product.product.price;
      }
      return total;
    },
  },
});
