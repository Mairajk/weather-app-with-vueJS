import { createApp } from "vue";
import { mutations, actions, getters, createStore } from "vuex";
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
    increment(state) {
      ++state.a;
    },
    setData(state, d) {
      state.data = d;
    },
  },
  actions: {
    async callApi(context) {
      let response = await axios.get(
        "https://api.weatherapi.com/v1/current.json?key=bf30ea59efc941f5bf055856231701&q=karachi&aqi=no"
      );

      context.commit();
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
