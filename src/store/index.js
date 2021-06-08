import Vue from "vue";
import Vuex from "vuex";

import page from "./marca-task";
import category from "./category-store";

Vue.use(Vuex);
const Store = new Vuex.Store({
  modules: {
    page,
    category
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEBUGGING
});
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  return Store;
}
