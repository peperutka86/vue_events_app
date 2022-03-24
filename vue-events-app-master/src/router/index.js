import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/create",
      name: "create",
      component: Create,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: Edit,
    },
  ],
});

export default router;
