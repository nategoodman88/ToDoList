import { directus } from "src/directus";

const routes = [
  {
    path: "/",
    component: () => import("pages/Login-Page.vue"),
  },
  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/signup",
    component: () => import("pages/SignUp-Page.vue"),
  },

  {
    path: "/logout",
    component: {
      async beforeRouteEnter(to, from, next) {
        try {
          await directus.auth.logout();
        } catch (error) {
        } finally {
          next({
            path: "/",
          });
        }
      },
    },
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
