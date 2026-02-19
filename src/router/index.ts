import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/BlogView.vue"),
  },
  {
    path: "/merchant",
    name: "Merchant",
    component: () => import("../views/MerchantView.vue"),
  },
  {
    path: "/developers",
    name: "Developers",
    component: () => import("../views/DevelopersView.vue"),
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
