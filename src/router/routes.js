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
        path: "/privacy-policy",
        component: () => import("pages/cookies.vue")
      },
      {
        path: "/products",
        name: "products",
        component: () => import("pages/productos.vue")
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
            "El cannabidiol (CBD) es un compuesto natural que genera en la flor del cannabis. Cientificos y medicos estan testeando las propiedades terapeuticas de CBD. Esta sustancia no es adictiva. El CBD se relaciona con otro fitocannabinoide medicinalmente activo: el tetrahidrocannabinol (THC), compuesto que causa la psicoactividad por el cannabis. Tanto el CBD como el THC tienen caracteristicas terapeuticas significativas."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "fertilizantes",
        meta: {
          title: "FERTILIZANTES",
          description:
            "Los fertilizantes o abonos pueden ser tanto organicos como inorganicos y contienen los nutrientes necesarios para las plantas, ya sea para mantener o incrementar los nutrientes del suelo, mejorar la calidad del sustrato (tierra), estimular el crecimiento vegetativo, etc..."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "semillas",
        meta: {
          title: "SEMILLAS",
          description:
            "Las semillas de cannabis pueden clasificarse en funcion de su especie, genetica, fenotipo y banco."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "sustratos",
        meta: {
          title: "SUSTRATOS",
          description:
            "Un sustrato es todo material solido distinto del suelo, natural, de sintesis o residual, mineral u organico, que, colocado en un contenedor, en forma pura o en mezcla, permite el anclaje del sistema radicular de la planta, cumpliendo, por tanto, un papel de soporte para la planta. El sustrato puede intervenir o no en el complejo proceso de la nutricion mineral de la planta."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "iluminacion",
        meta: {
          title: "ILUMINACION",
          description:
            "Elegir la correcta iluminacion para el cultivo de cannabis es una de las tareas mas importantes para los cultivadores. Descubre la amplia gama de catalogos en nuestra web, para conocer con mas detalle los productos que mejor se adaptan a tu cultivo interior, segun tus necesidades.."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "ventilacion",
        meta: {
          title: "VENTILACION",
          description:
            "La ventilacion es un elemento clave en el cultivo de interior de cannabis, ya que una habitacion mal aireada puede provocar la aparicion de hongos y enfermedades en tus plantas."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "parafernalia",
        meta: {
          title: "PARAFERNALIA",
          description:
            "Encuentra todo lo que necesitas para tus cultivos y mas en nuestras parafernalias"
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
