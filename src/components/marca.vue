<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-btn style="height: 50vh" @click="goToProducts()">
        <q-img
          :src="require(`../assets/${brand.imagen}`)"
          :alt="brand.imagen + ' Logo'"
        />

        <div class="text-h5 q-mt-sm q-mb-xs">{{ brand.nombre }}</div>
        <div class="text-caption text-grey">
          <p>
            {{ brand.caracteristicas }}
          </p>
        </div>
      </q-btn>
      <q-card-actions>
        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ brand.descripcion }}
          </q-card-section>
        </div>
      </q-slide-transition>
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
        name: "productos",
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
