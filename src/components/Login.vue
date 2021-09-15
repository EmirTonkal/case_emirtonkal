<template>
	<v-app id="inspire">
		<v-content>
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<v-col cols="12" sm="8" md="8">
						<v-card class="elevation-10">
							<v-window v-model="step">
								<v-window-item :value="1">
									<v-row>
										<v-col cols="12" md="8">
											<v-card-text class="mt-12">
												<h1
													class="text-center display-1 "
													style="color:#de2228"
												>
													{{ $t("login.loginToScorp") }}
												</h1>
												<div class="text-center mt-4">
													<v-btn class="mx-2" fab color="#757575" outlined>
														<v-icon>mdi-google-plus</v-icon>
													</v-btn>

													<v-btn class="mx-2" fab color="#757575" outlined>
														<v-icon>mdi-linkedin</v-icon>
													</v-btn>
													<v-btn class="mx-2" fab color="#757575" outlined>
														<v-icon>mdi-twitter</v-icon>
													</v-btn>
												</div>

												<v-form>
													<!-- 	<v-text-field
														v-model="name"
														:label="$t('login.name')"
														name="name"
														prepend-icon="mdi-account"
														type="text"
														color="#de2228"
													/> -->

													<v-text-field
														v-model="emailLogin"
														:label="$t('login.email')"
														name="Email"
														prepend-icon="mdi-email"
														type="text"
														color="#de2228"
													/>

													<v-text-field
														v-model="passwordLogin"
														id="password"
														:label="$t('login.password')"
														name="password"
														prepend-icon="mdi-lock"
														type="password"
														color="#de2228"
													/>
												</v-form>
											</v-card-text>
											<div class="text-center">
												<v-btn
													class="mb-3"
													rounded
													color="#de2228"
													@click="
														login();
														snackbar = true;
													"
													>{{ $t("login.login") }}
												</v-btn>
												<v-snackbar v-model="snackbar" :timeout="timeout">
													{{ error }}

													<template v-slot:action="{ attrs }">
														<v-btn
															color="#de2228"
															text
															v-bind="attrs"
															@click="snackbar = false"
														>
															{{ $t("login.close") }}
														</v-btn>
													</template>
												</v-snackbar>
											</div>
										</v-col>
										<v-col cols="12" md="4" style="background-color:#757575">
											<v-card-text class="white--text mt-12">
												<h1 class="text-center display-1">
													{{ $t("login.hey") }}
												</h1>
												<h5 class="text-center mt-5">
													{{ $t("login.notaMemberYet") }}
												</h5>
											</v-card-text>
											<div class="text-center mt-5">
												<v-btn rounded outlined dark @click="step++"
													>{{ $t("login.signUpNow") }}
													<v-icon class="ml-2">mdi-arrow-right</v-icon>
												</v-btn>
												<div style="margin-top:40%">
													<language-switcher
														align="center"
														text="center"
														class="mx-5 my-5"
													></language-switcher>
													<div style="clear:both">
														<v-btn
															class="mx-5 mb-3"
															height="25"
															rounded
															outlined
															dark
														>
															<v-icon color="#de2228" class="mr-2"
																>mdi-heart</v-icon
															>
															{{ $t("login.whyScorp") }}</v-btn
														>
													</div>
												</div>
											</div>
										</v-col>
									</v-row>
								</v-window-item>
								<v-window-item :value="2">
									<v-row class="fill-height">
										<v-col cols="12" md="4" style="background-color:#757575">
											<v-card-text class="white--text mt-12">
												<h1 class="text-center">
													{{ $t("login.areYouReadyToJoinUs") }}
												</h1>
												<h5 class="text-center mt-10">
													{{ $t("login.allYou") }}
												</h5>
											</v-card-text>
											<div class="text-center mt-5">
												<v-btn rounded outlined dark @click="step--">
													<v-icon class="mr-2">mdi-arrow-left</v-icon>
													{{ $t("login.login") }}
												</v-btn>
											</div>
										</v-col>

										<v-col cols="12" md="8">
											<v-card-text class="mt-12">
												<h1 class="text-center display-1" style="color:#de2228">
													{{ $t("login.createScorpAccount") }}
												</h1>
												<div class="text-center mt-4">
													<v-btn class="mx-2" fab color="#757575" outlined>
														<v-icon>mdi-google-plus</v-icon>
													</v-btn>

													<v-btn class="mx-2" fab color="#757575" outlined>
														<v-icon>mdi-linkedin</v-icon>
													</v-btn>
													<v-btn class="mx-2" fab color="#757575" outlined>
														<v-icon>mdi-twitter</v-icon>
													</v-btn>
												</div>
												<v-form ref="form" v-model="valid" lazy-validation>
													<v-text-field
														v-model="emailRegister"
														:label="$t('login.email')"
														name="Email"
														prepend-icon="mdi-email"
														type="text"
														color="#de2228"
														:rules="emailRules"
														required
													/>
													<v-text-field
														v-model="nameRegister"
														:label="$t('login.name')"
														name="Name"
														prepend-icon="mdi-account"
														type="text"
														color="#de2228"
														:rules="nameRules"
														required
													/>

													<v-text-field
														v-model="passwordRegister"
														id="password"
														:label="$t('login.password')"
														name="password"
														prepend-icon="mdi-lock"
														type="password"
														color="#de2228"
														:rules="passwordRules"
														required
													/>
												</v-form>
											</v-card-text>
											<div class="text-center mt-n5">
												<v-btn
													:disabled="!valid"
													rounded
													color="#de2228"
													class="mb-3"
													@click="
														validate();
														register();
														snackbarRegister = true;
													"
													>{{ $t("login.signUp") }}</v-btn
												>
												<v-snackbar
													v-model="snackbarRegister"
													:timeout="timeoutRegister"
												>
													{{ registerMessage }}

													<template v-slot:action="{ attrsRegister }">
														<v-btn
															color="#de2228"
															text
															v-bind="attrsRegister"
															@click="snackbarRegister = false"
														>
															{{ $t("login.close") }}
														</v-btn>
													</template>
												</v-snackbar>
											</div>
										</v-col>
									</v-row>
								</v-window-item>
							</v-window>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import LanguageSwitcher from "./LanguageSwitcher.vue";

Vue.use(VueRouter);

export default {
	name: "Login",
	components: { LanguageSwitcher },
	data: () => ({
		valid: true,
		step: 1,
		emailLogin: "",
		passwordLogin: "",
		emailRegister: "",
		passwordRegister: "",
		xhrRequest: false,
		error: "",
		registerMessage: "",
		snackbar: false,
		snackbarRegister: false,
		timeout: 2000,
		timeoutRegister: 2000,
		passwordRules: [(v) => !!v || ""],
		emailRules: [(v) => !!v || ""],
		nameRules: [(v) => !!v || ""],
	}),
	props: {
		source: String,
	},
	methods: {
		validate() {
			this.$refs.form.validate();
		},
		register() {
			if (
				this.emailRegister.length != 0 &&
				this.passwordRegister.length != 0 &&
				this.nameRegister.length != 0
			) {
				this.$store.commit("register", {
					username: this.emailRegister,
					password: this.passwordRegister,
				});
				this.registerMessage = this.$t("login.registerMessage");
			} else {
				this.registerMessage = this.$t("login.require");
			}
		},
		login() {
			const users = this.$store.state.users;
			const user = users.find(
				(x) =>
					x.username === this.emailLogin && x.password === this.passwordLogin
			);
			console.log(user);
			if (user) {
				this.$router.push("/");
			} else {
				this.error = this.$t("login.error");
			}
		},
	},
};
</script>
