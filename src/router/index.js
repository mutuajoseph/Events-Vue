import Vue from "vue";
import VueRouter from "vue-router";
import Eventlist from "../views/Eventlist"
import Eventshow from "../views/Eventshow"
import Eventcreate from "../views/Eventcreate"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "eventlist",
    component: Eventlist
  },
  {
    path: "/event/:id",
    name: "eventshow",
    component: Eventshow,
    props: true
  },
  {
    path: "/event/create",
    name: "eventcreate",
    component: Eventcreate
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
