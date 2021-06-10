<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Novedades</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Ofertón</div>
          <div class="text-caption text-black">
            {{ offer.texto_oferta }}
          </div>
          <div class="text-caption text-black q-pt-lg">
            {{ offer.descripcion }}
          </div>
          <div class="text-caption text-black q-pt-lg">
            {{ offer.caracteristicas }}
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            :src="require(`../assets/${offer.imagen}`)"
            style="max-height: 300px; max-width: 300px"
          />
        </q-card-section>
      </q-card-section>
      <q-separator />
      <q-card-section class="col-5 flex flex-center">
        <h5>POR TAN SOLO: {{ offer.precio }} €</h5>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: { offer: Object },
  data() {
    return {
      expanded: false
    };
  }
};
</script>
