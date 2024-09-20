import { createRouter } from "vue-router";
import MainPage from "@/pages/HomePage/HomePage.vue";
import { createWebHistory } from "vue-router";

export const routes = [
  { path: "/", name: "home", component: MainPage, linkName: "Home" },
  { path: "/new", name: "new", component: MainPage, linkName: "New" },
  {
    path: "/popular",
    name: "popular",
    component: MainPage,
    linkName: "Popular",
  },
  {
    path: "/trending",
    name: "trending",
    component: MainPage,
    linkName: "Trending",
  },
  {
    path: "/categories",
    name: "categories",
    component: MainPage,
    linkName: "Categories",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
