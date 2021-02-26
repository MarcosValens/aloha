<template>
  <q-page class="flex flex-center row bg-green-4">
    <novedades class="col-4" />
    <novedades class="col-4" />
  </q-page>
</template>

<script>
import novedades from "src/components/novedades.vue";

export default {
  name: "PageIndex",
  components: {
    novedades
  },
  data() {
    return {};
  }
};
</script>
