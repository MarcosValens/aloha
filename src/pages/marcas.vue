<template>
  <div class="q-pa-md flex row">
    <div class="col-12 text-center">
      <h3 class="aloha-font" style="font-size:3vw">{{ currentPage.title }}</h3>

      <q-separator color="primary" />
      <div class="row justify-center">
        <div class="col-8 q-mt-lg text-grey-8">
          <section>
            <p>{{ currentPage.content }}</p>
          </section>
        </div>
      </div>

      <div class="row justify-center">
        <h4 class="col-12">Nuestras marcas</h4>
        <marca
          v-for="brand in marcasFiltradas"
          :key="brand.id"
          v-bind:brand="brand"
        ></marca>
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
</template>

<script>
import marca from "src/components/marca.vue";
import * as service from "../boot/Service";
import { mapState } from "vuex";

export default {
  components: {
    marca
  },

  data() {
    return {
      marcas: [],
      marcasFiltradas: [],
      ambitos: []
    };
  },
  methods: {
    async getData() {
      let marcasData = await service.getData();
      this.marcas = marcasData.data;
      this.getAmbito();
    },
    getAmbito() {
      this.marcasFiltradas = [];
      this.marcas.forEach(marca => {
        if (marca.ambito == this.$router.currentRoute.name) {
          this.marcasFiltradas.push(marca);
        }
      });
    }
  },
  mounted() {
    this.getData();
    this.getAmbito();
    this.$store.watch(state => {
      return state;
    });
  },
  beforeUpdate() {
    this.getAmbito();
  },
  computed: {
    ...mapState("page", ["currentPage"])
  }
};
</script>
