<template>
  <div class="row justify-center text-center" style="flex-wrap:wrap">
    <producto1
      class="q-pt-xl col-xl-2 col-md-2 col-sm-3 col-xs-6"
      v-for="producto in products"
      style="min-height: 20vh; min-width:5vw"
      :key="producto.id"
      v-bind:product="producto"
    ></producto1>
  </div>
</template>

<script>
import * as service from "../boot/Service";
import producto1 from "src/components/producto.vue";
export default {
  data() {
    return {
      productoId: this.$route.params.id,
      products: []
    };
  },
  components: { producto1 },
  methods: {
    async getProductos() {
      let x = await service.getProducts(this.productoId);
      this.products = x.data;
    }
  },
  mounted() {
    this.getProductos();
  }
};
</script>

<style></style>
