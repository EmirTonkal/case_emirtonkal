import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import axios from "axios";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
	axios,
	router,
	vuetify,
	i18n,
	store,
	render: (h) => h(App),
}).$mount("#app");

i18n.locale = "en";
router.replace("/login");
