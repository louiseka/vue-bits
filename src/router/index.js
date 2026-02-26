import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import CounterView from "@/views/CounterView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/counter",
    name: "Counter",
    component: CounterView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
