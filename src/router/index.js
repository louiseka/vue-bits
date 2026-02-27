import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import CounterView from "@/views/CounterView.vue";
import TextStylerView from "@/views/TextStylerView.vue";

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
  {
    path: "/text-styler",
    name: "Text Styler",
    component: TextStylerView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
