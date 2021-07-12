<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card col-xl-1 col-md-1" flat bordered>
      <q-btn @click="goToProducts()">
        <q-img
          :src="require(`../assets/${brand.imagen}`)"
          :alt="brand.imagen + ' Logo'"
        />

        <p class="q-mt-sm" style="font-size:2vw;">{{ brand.nombre }}</p>
      </q-btn>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "marca-component",
  props: { brand: Object },
  data() {
    return {
      expanded: false
    };
  },
  methods: {
    goToProducts() {
      this.$router.push({
        name: "products",
        params: { id: this.brand.id }
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
