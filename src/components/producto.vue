<template>
  <div class="q-pa-md row q-gutter-md">
    <q-card class="my-card q-pa-md text-center" flat bordered>
      <q-img
        :src="require(`../assets/${product.imagen}`)"
        :alt="product.imagen + ' Logo'"
      />
      <div class="q-mt-sm q-mb-xs" style="font-size:2vw;">
        {{ product.nombre }}
      </div>
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
            {{ product.descripcion }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "producto-component",
  props: { product: Object },
  data() {
    return {
      expanded: false
    };
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 350px
  max-width: 350px

.precio
    margin: 0
    color: black !important
</style>
