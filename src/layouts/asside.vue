<template>
  <q-layout view="hHh Lpr lff">
    <q-drawer
      show-if-above
      v-model="left"
      side="left"
      behavior="desktop"
      elevated
    >
      <q-list bordered separator>
        <q-item
          clickable
          v-ripple
          v-for="subcategory in subCategoriesFilter"
          :key="subcategory.name"
        >
          <q-item-section>{{ subcategory.name }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import * as service from "../boot/Service";
export default {
  data() {
    return {
      left: false,
      subCategoriesData: [],
      subCategoriesFilter: [],
      selectedFilters: []
    };
  },
  methods: {
    async getSubcategories() {
      this.subCategoriesData = await service.getSubCategories();
    },
    filterSubcategories(metaTitle) {
      this.subCategoriesFilter = [];
      let categoryNameURL = this.capitalize(metaTitle);
      this.subCategoriesData.data.forEach(subCategory => {
        let categoryNameData = this.capitalize(subCategory.category.name);
        if (categoryNameData == categoryNameURL) {
          this.subCategoriesFilter.push(subCategory);
        }
      });
    },
    capitalize(string) {
      return string.toUpperCase();
    }
  },
  watch: {
    $route(to) {
      this.filterSubcategories(to.meta.title);
    }
  },
  async mounted() {
    let header = document.getElementsByClassName("q-header").offsetHeight;
    console.log(header);
    await this.getSubcategories();
    this.filterSubcategories(this.$route.meta.title);
  }
};
</script>
