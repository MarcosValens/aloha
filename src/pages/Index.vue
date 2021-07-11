<template>
  <q-page class="row flex flex-center q-pa-lg">
    <q-separator color="primary" />

    <h4 class="col-12 text-center aloha-font">
      El mejor material al mejor precio para tu cultivo
    </h4>
    <h6 class="col-12 text-center">DESTACADOS</h6>
    <p class="col-12 text-center text-grey-8 ">
      Enterate aquí de cuales son nuestros productos estrella o las ultimas
      novedades sobre nuevos productos
    </p>

    <div class="row flex-center">
      <novedades
        class="col-lg-10"
        v-for="offer in offers"
        :key="offer.id"
        v-bind:offer="offer"
      />
    </div>
    <div class="row text-center justify-center q-mb-xl">
      <h4 class="col-12">Los profesionales con más experiencia</h4>
      <p class="col-6 text-grey-8">
        Somos una de las empresas lideres en el mercado gracias a nuestra
        apuesta firme por la innovación y conocimiento profundo para cada
        situacion y momento. Para empezar con tu hobby tenemos todo lo que
        necesitas para ello. Consulta con nuestros expertos en todo momento a
        través de nuestras redes sociales, teléfono o correo electrónico
      </p>
    </div>
    <caracteristicas class="q-pb-xl"> </caracteristicas>
  </q-page>
</template>

<script>
import novedades from "src/components/novedades.vue";
import caracteristicas from "src/components/caracteristicas.vue";
import * as service from "../boot/Service";

export default {
  name: "PageIndex",
  components: {
    novedades,
    caracteristicas
  },
  data() {
    return {
      offers: []
    };
  },
  methods: {
    async offersData() {
      let offersData = await service.getOffers();
      this.offers = offersData.data;
    },
    allow18() {
      this.$q
        .dialog({
          title: "Necesitas ser mayor de edad para visitar nuestra web",
          message: "¿Eres mayor de edad?",
          ok: {
            push: true,
            label: "Si"
          },
          cancel: {
            push: false,
            label: "No",
            color: "negative"
          },
          persistent: true
        })
        .onOk(() => {
          localStorage.setItem("allow18", true);
        })
        .onCancel(() => {
          window.location = "https://www.google.com";
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }
  },
  mounted() {
    let x = localStorage.getItem("allow18");
    if (!x) {
      this.allow18();
    }

    this.offersData();
  }
};
</script>

<style lang="scss" scoped></style>
