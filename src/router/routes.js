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
      }
    ]
  },
  {
    path: "/menu",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "cbd",
        meta: {
          title: "CBD",
          description:
            "El cannabidiol (CBD) es un compuesto natural que genera en la flor del cannabis. Científicos y médicos están testeando las propiedades terapéuticas de CBD. Esta sustancia no es adictiva. El       CBD se relaciona con otro fitocannabinoide medicinalmente activo: el tetrahidrocannabinol (THC), compuesto que causa la psicoactividad por el cannabis. Tanto el CBD como el THC tienen características terapéuticas significativas."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "fertilizantes",
        meta: {
          title: "FERTILIZANTES",
          description:
            "El cannabidiol (CBD) es un compuesto natural que genera en la flor del cannabis. Científicos y médicos están testeando las propiedades terapéuticas de CBD. Esta sustancia no es adictiva. El       CBD se relaciona con otro fitocannabinoide medicinalmente activo: el tetrahidrocannabinol (THC), compuesto que causa la psicoactividad por el cannabis. Tanto el CBD como el THC tienen características terapéuticas significativas."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "semillas",
        meta: {
          title: "SEMILLAS",
          description:
            "El cannabidiol (CBD) es un compuesto natural que genera en la flor del cannabis. Científicos y médicos están testeando las propiedades terapéuticas de CBD. Esta sustancia no es adictiva. El       CBD se relaciona con otro fitocannabinoide medicinalmente activo: el tetrahidrocannabinol (THC), compuesto que causa la psicoactividad por el cannabis. Tanto el CBD como el THC tienen características terapéuticas significativas."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "sustratos",
        meta: {
          title: "SUSTRATOS",
          description:
            "El cannabidiol (CBD) es un compuesto natural que genera en la flor del cannabis. Científicos y médicos están testeando las propiedades terapéuticas de CBD. Esta sustancia no es adictiva. El       CBD se relaciona con otro fitocannabinoide medicinalmente activo: el tetrahidrocannabinol (THC), compuesto que causa la psicoactividad por el cannabis. Tanto el CBD como el THC tienen características terapéuticas significativas."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "iluminacion",
        meta: {
          title: "ILUMINACIÒN",
          description:
            "El cannabidiol (CBD) es un compuesto natural que genera en la flor del cannabis. Científicos y médicos están testeando las propiedades terapéuticas de CBD. Esta sustancia no es adictiva. El       CBD se relaciona con otro fitocannabinoide medicinalmente activo: el tetrahidrocannabinol (THC), compuesto que causa la psicoactividad por el cannabis. Tanto el CBD como el THC tienen características terapéuticas significativas."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "ventilacion",
        meta: {
          title: "VENTILACIÓN",
          description:
            "El cannabidiol (CBD) es un compuesto natural que genera en la flor del cannabis. Científicos y médicos están testeando las propiedades terapéuticas de CBD. Esta sustancia no es adictiva. El       CBD se relaciona con otro fitocannabinoide medicinalmente activo: el tetrahidrocannabinol (THC), compuesto que causa la psicoactividad por el cannabis. Tanto el CBD como el THC tienen características terapéuticas significativas."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "parafernalia",
        meta: {
          title: "PARAFERNALIA",
          description:
            "El cannabidiol (CBD) es un compuesto natural que genera en la flor del cannabis. Científicos y médicos están testeando las propiedades terapéuticas de CBD. Esta sustancia no es adictiva. El       CBD se relaciona con otro fitocannabinoide medicinalmente activo: el tetrahidrocannabinol (THC), compuesto que causa la psicoactividad por el cannabis. Tanto el CBD como el THC tienen características terapéuticas significativas."
        },
        component: () => import("src/pages/marcas.vue")
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
