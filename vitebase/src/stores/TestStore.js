import { defineStore, storeToRefs } from "pinia";
export const testStore = defineStore("test", {
  // 相当于data
  state: () => {
    return {
      count: 0,
      title:'Hello Pinia',
      message:'This is not Vuex'
    };
  },
  //   相当于methods
  actions: {
    testAction(){
        this.count*=2
    }
  },
  //   相当于computed
  getters: {},
});
