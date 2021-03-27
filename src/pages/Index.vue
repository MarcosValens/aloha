<template>
  <q-page class="row flex flex-center q-pa-lg">
    <q-separator color="primary" />

    <h4 class="col-12 text-center">
      El mejor material al mejor precio para tu cultivo
    </h4>
    <h6 class="col-12 text-center">DESTACADOS</h6>
    <p class="col-12 text-center text-grey-8">
      Enterate aquí de cuales son nuestros productos estrella o las ultimas
      novedades sobre nuevos productos
    </p>

    <div class="row flex-center">
      <novedades class="col-lg-4" />
      <novedades class="col-lg-4" />
    </div>
    <div class="row text-center justify-center q-mb-xl">
      <h4 class="col-12">Los profesionales con más experiencia</h4>
      <p class="col-6 text-grey-8">
        Somos una de las empresas lideres en el mercado gracias a nuestra
        apuesta firme por la innovación y conocimiento profundo para cada
        situacion y momento. Para empezar o agrandar más tu cultivo bien sea por
        necesidad o por hobby tenemos todo lo que necesitas para ello. Consulta
        con nuestros expertos en todo momento a través de nuestras redes
        sociales, teléfono o correo electrónico
      </p>
    </div>
    <caracteristicas class="q-pb-xl"> </caracteristicas>
  </q-page>
</template>

<script>
import novedades from "src/components/novedades.vue";
import caracteristicas from "src/components/caracteristicas.vue";

export default {
  name: "PageIndex",
  components: {
    novedades,
    caracteristicas
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
