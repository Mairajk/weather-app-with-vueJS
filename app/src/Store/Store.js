import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isLogin: false,
      user: "",
    };
  },
});

export default store;
