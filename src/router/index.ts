import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../views/ServicesView.vue"),
  },
  {
    path: "/platform",
    name: "Platform",
    component: () => import("../views/PlatformView.vue"),
  },
  {
    path: "/company",
    name: "Company",
    component: () => import("../views/CompanyView.vue"),
  },
  {
    path: "/faq",
    name: "Faq",
    component: () => import("../views/FaqView.vue"),
  },
  {
    path: "/contactus",
    alias: ["/contact-us"],
    name: "ContactUs",
    component: () => import("../views/ContactUsView.vue"),
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
