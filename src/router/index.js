import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView";
import CarsView from "../views/CarsView"
import CarView from "../views/CarView"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarsView,
  },
  {
    path: '/car/:id',
    name: 'car-details', 
    component: CarView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
