import { createRouter, createWebHistory } from "vue-router";

import { routes } from "./router-link";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from) => {
//   return false
// })

export default router;
