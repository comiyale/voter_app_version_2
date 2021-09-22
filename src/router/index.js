import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "RootLogin",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/LoginVoters",
    name: "LoginVoters",
    component: () => import("../views/LoginVoters.vue")
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/EditProfile/:name",
    name: "EditProfile",
    component: () => import("../views/EditProfile.vue")
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue")
  },
  {
    path: "/Signup",
    name: "Signup",
    component: () => import("../views/Signup.vue")
  },
  {
    path: "/RegisterVoters",
    name: "RegisterVoters",
    component: () => import("../views/RegisterVoters.vue")
  },
  {
    path: "/ManageVotersCrud",
    name: "ManageVotersCrud",
    component: () => import("../views/ManageVotersCrud.vue")
  },
  {
    path: "/ConfirmEmail/:companyName/:key",
    name: "ConfirmEmail",
    component: () => import("../views/ConfirmEmail.vue")
  },
  {
    path: "/Elections",
    name: "Elections",
    component: () => import("../views/Elections.vue")
  },
  {
    path: "/ElectionFederal",
    name: "ElectionFederal",
    component: () => import("../views/ElectionFederal.vue")
  },
  {
    path: "/ElectionState",
    name: "ElectionState",
    component: () => import("../views/ElectionState.vue")
  },
  {
    path: "/ElectionLocal",
    name: "ElectionLocal",
    component: () => import("../views/ElectionLocal.vue")
  },
  {
    path: "/Reports",
    name: "Reports",
    component: () => import("../views/Reports.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
