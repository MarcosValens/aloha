<template>
  <q-page>
    <div class="q-pa-md flex row">
      <div class="col-12 text-center">
        <q-toolbar-title class="text-center">
          {{ $route.meta.title }}
        </q-toolbar-title>

        <q-separator color="primary" />
        <div class="row justify-center">
          <div class="col-8 q-mt-lg text-grey-8">
            <section>
              {{ $route.meta.description }}
            </section>
          </div>
        </div>

        <div class="row justify-center">
          <!-- <marca
            v-for="brand in brands"
            :key="brand.id"
            v-bind:brand="brand"
          ></marca> -->
        </div>

        <q-btn
          class="q-mt-xl"
          color="white"
          text-color="grey-8"
          unelevated
          to="/"
          label="Volver al inicio"
          no-caps
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import marca from "src/components/marca.vue";
import * as service from "../boot/Service";

export default {
  components: {
    marca
  },

  data() {
    return {
      productsData: [],
      productsFilter: [],
      brands: [],
      marcasFiltradas: []
    };
  },
  methods: {
    async getProducts() {
      let products = await service.getAllProducts();
      this.productsData = products.data;
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>
