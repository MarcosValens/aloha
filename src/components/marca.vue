<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-btn style="height: 25vh; width:7vw" @click="goToProducts()">
        <q-img
          :src="require(`../assets/${brand.imagen}`)"
          :alt="brand.imagen + ' Logo'"
        />

        <div class="text-h5 q-mt-sm q-mb-xs">{{ brand.nombre }}</div>
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
