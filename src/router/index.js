import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Countries from "@/views/Countries.vue";
import Country from "@/views/Country.vue";
import Medals from "@/views/Medals.vue";
import Disciplines from "@/views/Disciplines.vue";
import Discipline from "@/views/Discipline.vue";
import DisciplineMedals from "@/views/DisciplineMedals.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/countries",
      name: "countries",
      component: Countries,
    },
    {
      path: "/country/:city",
      name: "country",
      component: Country,
    },
    {
      path: "/medals/:medal/:city",
      name: "medals",
      component: Medals,
    },
    {
      path: "/disciplines",
      name: "disciplines",
      component: Disciplines,
    },
    {
      path: "/discipline/:discipline",
      name: "discipline",
      component: Discipline,
    },
    {
      path: "/disciplineMedals/:city/:discipline/",
      name: "disciplineMedals",
      component: DisciplineMedals,
    },
  ],
});

export default router;
