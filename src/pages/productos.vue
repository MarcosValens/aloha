<template>
  <div class="row justify-center text-center">
    <producto1
      class="q-pt-xl"
      v-for="producto in products"
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
      console.log(x.data);
      this.products = x.data;
      console.log(this.products);
    }
  },
  mounted() {
    this.getProductos();
  }
};
</script>

<style></style>
