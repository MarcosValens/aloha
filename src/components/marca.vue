<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-btn @click="goToProducts()">
        <q-img
          style="height: 200px; max-height: 200px"
          :src="require(`../assets/${brand.image}`)"
          :alt="brand.image + ' Logo'"
        />

        <div class="text-h5 q-mt-sm q-mb-xs" style="min-width: 200px">
          {{ brand.name }}
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
          <q-card-section class="text-subitle2" style="max-width: 200px">
            {{ brand.description }}
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
