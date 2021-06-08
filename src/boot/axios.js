import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;

export default {
  api_rest: axios.create({
    /* baseURL: "https://www.alohagrowshop.com/back/api" */
    baseURL: "http://localhost:8000/back/api"
  })
};
