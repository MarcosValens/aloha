<template>
  <div>test</div>
</template>

<script>
import * as service from "../boot/Service";
export default {
  data() {
    return {
      marcaId: this.$route.params.id,
      products: []
    };
  },
  methods: {
    async getProductos() {
      let x = await service.getProducts(this.marcaId);
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
