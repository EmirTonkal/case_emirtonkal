import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		users: [{ username: "admin", password: "admin" }],
	},
	mutations: {
		register(state, user) {
			state.users.push(user);
		},
	},
});
export default store;
