import useStore from "./../store";
import contents from "./../store/contents.js";
function beforeEnter(to, from, next) {
  const name = to.name;
  useStore().commit("page/setCurrentPage", contents[name]);
  next();
}

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/Index.vue")
      },
      {
        path: "/cbd",
        component: () => import("src/pages/marcas.vue"),
        name: "cbd",
        beforeEnter
      },
      {
        path: "/fertilizantes",
        component: () => import("src/pages/marcas.vue"),
        name: "fertilizantes",
        beforeEnter
      },
      {
        path: "/semillas",
        component: () => import("src/pages/marcas.vue"),
        name: "semillas",
        beforeEnter
      },
      {
        path: "/sustratos",
        component: () => import("src/pages/marcas.vue"),
        name: "sustratos",
        beforeEnter
      },
      {
        path: "/iluminacion",
        component: () => import("src/pages/marcas.vue"),
        name: "iluminacion",
        beforeEnter
      },
      {
        path: "/ventilacion",
        component: () => import("src/pages/marcas.vue"),
        name: "ventilacion",
        beforeEnter
      },
      {
        path: "/parafernalia",
        component: () => import("src/pages/marcas.vue"),
        name: "parafernalia",
        beforeEnter
      },
      {
        path: "/productos/:id",
        name: "productos",
        component: () => import("pages/productos.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
