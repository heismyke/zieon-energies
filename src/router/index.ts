import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/partners",
    name: "Partners",
    component: () => import("../views/PartnersView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/brand",
    name: "Brand",
    component: () => import("../views/GenericPageView.vue"),
    props: {
      eyebrow: "BRAND",
      title: "A system designed to feel precise, warm, and modern.",
      description:
        "This route is prepared for brand assets, guidelines, and downloadable materials.",
    },
  },
  {
    path: "/get-started",
    name: "GetStarted",
    component: () => import("../views/GenericPageView.vue"),
    props: {
      eyebrow: "GET STARTED",
      title: "Start your zieon energies estimate.",
      description:
        "The CTA route is ready for qualification forms, intake steps, and future onboarding flows.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

export default router;
