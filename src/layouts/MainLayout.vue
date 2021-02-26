<template>
  <q-layout view="hHh LpR fFf">
    <!--HEADER-->
    <q-header reveal elevated class="text-white">
      <q-img
        src="../assets/banner.jpg"
        alt="fondo_banner"
        style="max-height: 200px;"
      >
        <q-toolbar class="absolute-full ">
          <q-btn round color="primary" icon="menu" @click="left = !left" />
          <q-toolbar-title class="row justify-center">
            <q-img
              src="../assets/AlohaGrow.png"
              spinner-color="white"
              style="max-height: 150px; max-width: 150px"
              alt="Logo Alohas"
            />
          </q-toolbar-title>
        </q-toolbar>
      </q-img>

      <q-tabs align="center">
        <q-route-tab to="/page1" label="Productos CBD" />
        <q-route-tab to="/page2" label="Cultivos" />
        <q-route-tab to="/page3" label="Fertilizantes" />
      </q-tabs>
    </q-header>

    <!--MENU LATERAL-->
    <q-drawer v-model="left" side="left" bordered>
      <q-list bordered class="rounded-borders text-primary">
        <q-item
          clickable
          v-ripple
          :active="link === 'productosCBD'"
          @click="link = 'productosCBD'"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="star_outline" />
          </q-item-section>

          <q-item-section>Productos CBD</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'cultivos'"
          @click="link = 'cultivos'"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="eco" />
          </q-item-section>

          <q-item-section>Cultivos</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'fertilizantes'"
          @click="link = 'fertilizantes'"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="local_drink" />
          </q-item-section>

          <q-item-section>Fertilizantes</q-item-section>
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
    <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style lang="sass">
.my-menu-link
  color: white
  background: #004D61
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
