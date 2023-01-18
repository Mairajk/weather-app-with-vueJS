import { createApp } from "vue";
import { createStore } from "vuex";
import axios from "axios";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      a: 0,
      data: "",
     
    };
  },

  mutations: {
    increment(state , payload) {
      state.a += payload;
    },

    setData(state, d) {
      state.data = d;
    },
  },
  actions: {
    async callApi(context , city) {
      let response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=bf30ea59efc941f5bf055856231701&q=${city}&aqi=no`
      );

      context.commit("setData", response.data);
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
