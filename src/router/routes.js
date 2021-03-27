const routes = [
  {
    path: "/test",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/test",
        component: () => import("pages/Index.vue")
      },
      {
        path: "/cbd",
        component: () => import("pages/Cbd.vue")
      }
    ]
  },
  {
    path: "/",
    component: () => import("pages/working.vue"),
    children: []
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
