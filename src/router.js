import { createRouter, createWebHistory } from "vue-router";
import NotFound from "./components/NotFound.vue";
import HomeApp from "./components/HomeApp.vue";
import CounterApp from "./components/CounterApp.vue";
import ContactMe from "./components/ContactMe.vue";

const routes = [
  { path: "/", name: "Home", component: HomeApp },

  { path: "/counter", name: "Counter", component: CounterApp },

  {path : "/contact", name : "Contact", component : ContactMe},

  { path: "/:catchAll(.*)", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
