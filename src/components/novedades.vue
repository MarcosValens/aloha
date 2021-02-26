<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Novedades</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Ofertón</div>
          <div class="text-caption text-black">
            ¡SALUDOS A TODOS! Desde el equipo de @aloha_growshop os traemos este
            KIT DE ILUMINACION DE 600W que incluye balastro abierto, bombilla y
            reflector con casquillo de porcelana ¡POR TAN SÓLO 59,99€ IVA
            incluido!
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="../assets/lampara.jpg"
            style="max-height: 300px; max-width: 300px"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions class="justify-center">
        <q-btn flat color="primary" class="col-12">
          Reservar
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
