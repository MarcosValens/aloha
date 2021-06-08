<template>
  <div class="row justify-center text-center">
    <product
      class="q-pt-xl"
      v-for="producto in products"
      :key="producto.id"
      v-bind:product="producto"
    ></product>
  </div>
</template>

<script>
import * as service from "../boot/Service";
import product from "src/components/producto.vue";
export default {
  data() {
    return {
      productoId: this.$route.params.id,
      products: []
    };
  },
  components: { product },
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
