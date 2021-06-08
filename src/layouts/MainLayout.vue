<template>
  <q-layout view="hHh lpR fff">
    <!--HEADER-->
    <q-header reveal elevated class="text-white row justify-center">
      <q-parallax src="../assets/banner.jpg" :height="200" class="desktop-only">
        <q-toolbar
          class="col-1 desktop-hide"
          style="position: fixed; left:2vw; top:1vh"
        >
          <q-btn round color="secondary" icon="menu" @click="left = !left" />
          <q-toolbar-title class="row justify-center"> </q-toolbar-title>
        </q-toolbar>
        <q-img
          src="../assets/aloha.png"
          spinner-color="white"
          alt="Logo Alohas"
          style="max-width: 150px"
        />
      </q-parallax>
      <q-parallax src="../assets/banner.jpg" :height="100" class="desktop-hide">
        <q-toolbar
          class="col-1 desktop-hide"
          style="position: fixed; left:2vw; top:1vh"
        >
          <q-btn round color="secondary" icon="menu" @click="left = !left" />
          <q-toolbar-title class="row justify-center"> </q-toolbar-title>
        </q-toolbar>
        <q-img
          src="../assets/aloha.png"
          spinner-color="white"
          alt="Logo Alohas"
          style="max-width: 75px"
        />
      </q-parallax>
      <q-tabs align="center" class="desktop-only">
        <q-route-tab to="/menu/cbd" label="CBD" />
        <q-route-tab to="/menu/fertilizantes" label="Fertilizantes" />
        <q-route-tab to="/menu/semillas" label="Semillas" />
        <q-route-tab to="/menu/sustratos" label="Sustratos" />
        <q-route-tab to="/menu/iluminacion" label="Iluminación" />
        <q-route-tab to="/menu/ventilacion" label="Ventilación" />
        <q-route-tab to="/menu/parafernalia" label="Parafernalia" />
      </q-tabs>
    </q-header>

    <!--MENU LATERAL-->
    <q-drawer v-model="left" side="left" bordered>
      <q-list bordered class="rounded-borders text-primary">
        <q-item
          clickable
          v-ripple
          :active="link === 'CBD'"
          @click="link = 'CBD'"
          to="/menu/cbd"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-cannabis" />
          </q-item-section>

          <q-item-section>CBD</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'fertilizantes'"
          @click="link = 'fertilizantes'"
          active-class="my-menu-link"
          to="/menu/fertilizantes"
        >
          <q-item-section avatar>
            <q-icon name="local_drink" />
          </q-item-section>

          <q-item-section>Fertilizantes</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'semillas'"
          @click="link = 'semillas'"
          active-class="my-menu-link"
          to="/menu/semillas"
        >
          <q-item-section avatar>
            <q-icon name="las la-seedling" />
          </q-item-section>

          <q-item-section>Semillas</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'sustratos'"
          @click="link = 'sustratos'"
          active-class="my-menu-link"
          to="/menu/sustratos"
        >
          <q-item-section avatar>
            <q-icon name="las la-mountain" />
          </q-item-section>

          <q-item-section>Sustratos</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'iluminacion'"
          @click="link = 'iluminacion'"
          active-class="my-menu-link"
          to="/menu/iluminacion"
        >
          <q-item-section avatar>
            <q-icon name="far fa-lightbulb" />
          </q-item-section>

          <q-item-section>Iluminación</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'ventilacion'"
          @click="link = 'ventilacion'"
          active-class="my-menu-link"
          to="/menu/ventilacion"
        >
          <q-item-section avatar>
            <q-icon name="air" />
          </q-item-section>

          <q-item-section>Ventilación</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'parafernalia'"
          @click="link = 'parafernalia'"
          active-class="my-menu-link"
          to="/menu/parafernalia"
        >
          <q-item-section avatar>
            <q-icon name="las la-gift" />
          </q-item-section>

          <q-item-section>Parafernalia</q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item
          clickable
          v-ripple
          :active="link === 'settings'"
          @click="link = 'settings'"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>

          <q-item-section>Opciones</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'help'"
          @click="link = 'help'"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>

          <q-item-section>Ayuda</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!--FOOTER-->
    <q-footer class="bg-primary text-white">
      <div id="animated-footer" class="row col-12 bg-dark items-center ">
        <p class="col-12 text-red-1">
          <span class="text-warning text-weight-bolder"
            >Pedido a domicilio GRATUITO (Pedidos superiores a 30 €)</span
          >
          · LLamanos al <a href="tel:+34638342442">638342442</a>
        </p>
      </div>
      <q-avatar class="q-ma-md">
        <img src="../assets/aloha.png" alt="Logo Aloha Growshop" />
      </q-avatar>
      <div class="row justify-center">
        <div class="q-pa-md col-lg-3 col-xs-12" style="max-width: 350px">
          <q-list bordered>
            <q-item>
              <q-item-section class="text-center">Información</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar text-color="white" icon="phone" />
              </q-item-section>
              <q-item-section
                ><a href="tel:+34638342442">Llámanos</a></q-item-section
              >
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-avatar text-color="white" icon="alternate_email" />
              </q-item-section>
              <q-item-section
                ><a href="mailto:alohagrowshop@hotmail.com"
                  >Contáctanos</a
                ></q-item-section
              >
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-avatar text-color="white" icon="lab la-instagram" />
              </q-item-section>
              <q-item-section>
                <a href="https://www.instagram.com/aloha_growshop/"
                  >Instagram</a
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-avatar text-color="white" icon="room" />
              </q-item-section>
              <q-item-section>
                Dirección
                <a
                  href="https://www.google.com/maps/place/Aloha+growshop/@39.582489,2.6588836,16z/data=!4m5!3m4!1s0x129793abc6e86fcb:0x80820a78c0ed8410!8m2!3d39.5823815!4d2.6578322"
                  target="_blank"
                  >Carrer de Guillem Galmés , 55</a
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="q-pa-md col-lg-3 col-xs-12" style="max-width: 350px">
          <iframe
            height="250"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=aloha%20growshop&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<style lang="scss">
.my-menu-link {
  color: white;
  background: #004d61;
}

#animated-footer {
  overflow: hidden;
  position: sticky;
  bottom: 50px;
  height: 50px;
  p {
    margin-bottom: 0px;
    animation: marquee 20s linear infinite;
  }
}
a {
  text-decoration: none;
  color: white;
}

.container-logo {
  background: rgba(0, 0, 0, 0) !important;
  img {
    max-height: 100%;
    max-width: 100%;
  }
}

@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>

<script>
import novedad from "components/novedades.vue";
export default {
  data() {
    return {
      components: { novedad },
      left: false,
      link: "inbox"
    };
  }
};
</script>
