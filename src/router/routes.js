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
            "Los fertilizantes o abonos pueden ser tanto orgánicos como inorgánicos y contienen los nutrientes necesarios para las plantas, ya sea para mantener o incrementar los nutrientes del suelo, mejorar la calidad del sustrato (tierra), estimular el crecimiento vegetativo, etc..."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "semillas",
        meta: {
          title: "SEMILLAS",
          description:
            "Las semillas de cannabis pueden clasificarse en función de su especie, genética, fenotipo y banco."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "sustratos",
        meta: {
          title: "SUSTRATOS",
          description:
            "Un sustrato es todo material sólido distinto del suelo, natural, de síntesis o residual, mineral u orgánico, que, colocado en un contenedor, en forma pura o en mezcla, permite el anclaje del sistema radicular de la planta, desempeñando, por tanto, un papel de soporte para la planta. El sustrato puede intervenir o no en el complejo proceso de la nutrición mineral de la planta."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "iluminacion",
        meta: {
          title: "ILUMINACIÒN",
          description:
            "Elegir la correcta iluminación para el cultivo de cannabis es una de las tareas más importantes para los cultivadores. Descubre la amplia gama de catálogos en nuestra web, para conocer con más detalle los productos que mejor se adaptan a tu cultivo interior, según tus necesidades.."
        },
        component: () => import("src/pages/marcas.vue")
      },
      {
        path: "ventilacion",
        meta: {
          title: "VENTILACIÓN",
          description:
            "La ventilación es un elemento clave en el cultivo de interior de cannabis, ya que una habitación mal aireada puede provocar la aparición de hongos y enfermedades en tus plantas. A continuación te explicamos paso a paso cómo y por qué ventilar correctamente tu espacio indoor de cultivo."
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
