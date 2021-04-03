import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;

export default {
  api_rest: axios.create({
    baseURL: "http://localhost:8000/back/api"
  })
};
