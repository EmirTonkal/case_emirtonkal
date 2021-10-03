import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Login from "../views/Login.vue";
import ContactUs from "../views/ContactUs.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Main",
		component: Main,
	},
	{
		path: "/contactus",
		name: "ContactUs",
		component: ContactUs,
	},
	{
		path: "/login",
		name: "Login",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: Login,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
