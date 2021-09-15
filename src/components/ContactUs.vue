<template>
	<div id="app">
		<v-app id="inspire">
			<v-app-bar app clipped-left>
				<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

				<v-toolbar-title style="color:#de2228;" class="font-weight-bold">{{
					$t("contactUs.welcomeToScorp")
				}}</v-toolbar-title>

				<v-spacer></v-spacer>

				<v-card height="36" width="200"
					><v-text-field
						class="mx-3"
						:placeholder="$t('contactUs.search')"
						append-icon="mdi-magnify"
						color="#de2228"
					></v-text-field
				></v-card>
				<v-spacer />
				<language-switcher></language-switcher>
				<!-- <v-btn class="ml-2">
					Geçmiş
					<v-icon class="ml-2">mdi-magnify</v-icon>
				</v-btn> -->

				<v-menu left bottom>
					<template v-slot:activator="{ on }">
						<v-btn icon v-on="on">
							<v-icon>mdi-dots-vertical</v-icon>
						</v-btn>
					</template>

					<v-list>
						<v-btn>
							{{ $t("contactUs.favorites") }}
							<v-icon class="ml-1" color="#de2228	">mdi-heart</v-icon> </v-btn
						><br />

						<v-btn to="/login" class="mt-2" width="144">
							{{ $t("contactUs.logout") }}
							<v-icon>mdi-cancel</v-icon>
						</v-btn>
						<v-switch
							v-model="theme"
							:label="$t('contactUs.theme')"
							color="#de2228"
							hide-details
							class="ml-2"
						></v-switch>
					</v-list>
				</v-menu>
			</v-app-bar>
			<v-navigation-drawer v-model="drawer" absolute temporary>
				<v-list nav dense>
					<v-list-item-group v-model="group" active-class="red--text">
						<v-list-item to="/#">
							<v-list-item-icon>
								<v-icon>mdi-home</v-icon>
							</v-list-item-icon>
							<v-list-item-title>{{ $t("contactUs.home") }}</v-list-item-title>
						</v-list-item>

						<v-list-item to="/contactus">
							<v-list-item-icon>
								<v-icon>mdi-chat-outline</v-icon>
							</v-list-item-icon>
							<v-list-item-title>{{
								$t("contactUs.contact")
							}}</v-list-item-title>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-navigation-drawer>

			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center" dense>
					<v-col cols="12" sm="8" md="8">
						<v-card elevation="12" class="px-10 py-10 rounded border">
							<v-form ref="form" v-model="valid" lazy-validation>
								<h3 class="text-center mt-5" style="color:#de2228">
									{{ $t("contactUs.contactUs") }}
								</h3>
								<v-text-field
									:label="$t('contactUs.name')"
									name="name"
									prepend-icon="mdi-account"
									type="text"
									color="#de2228"
									v-model="name"
									:rules="nameRules"
								/>
								<v-text-field
									:label="$t('contactUs.email')"
									name="Email"
									prepend-icon="mdi-email"
									type="email"
									color="#de2228"
									v-model="email"
									:rules="emailRules"
									required
								/>

								<v-text-field
									id="phoneNumber"
									:label="$t('contactUs.phoneNumber')"
									name="phoneNumber"
									prepend-icon="mdi-phone"
									type="tel"
									color="#de2228"
									pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
									:counter="10"
									v-model="phone"
									:rules="phoneRules"
									required
								/>
								<v-select
									prepend-icon="mdi-web"
									color="#de2228"
									:items="tags"
									:label="$t('contactUs.country')"
									v-model="selected_tags"
									:rules="tagRules"
									required
								></v-select>
								<v-textarea
									solo
									name="input-7-4"
									:label="$t('contactUs.message')"
									color="#de2228"
									prepend-icon="mdi-chat-outline"
									v-model="textAreaMessage"
									:rules="messageRules"
								></v-textarea>
								<div class="text-center">
									<v-btn
										:disabled="!valid"
										rounded
										color="#de2228"
										class="mb-3"
										@click="
											send();
											validate();
											snackbar = true;
										"
										>{{ $t("contactUs.send") }}</v-btn
									><v-snackbar v-model="snackbar" :timeout="2000">
										{{ $t("contactUs.info") }}

										<template v-slot:action="{ attrs }">
											<v-btn
												:timeout="-1"
												color="#de2228"
												text
												v-bind="attrs"
												@click="snackbar = false"
											>
												{{ $t("contactUs.close") }}
											</v-btn>
										</template>
									</v-snackbar>
								</div>
							</v-form>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-app>
	</div></template
>
<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";

export default {
	components: { LanguageSwitcher },

	data: () => ({
		snackbar: false,
		selected_tags: "",
		textAreaMessage: "",
		phone: "",
		name: "",
		message: "",
		valid: true,
		email: "",
		nameRules: [(v) => !!v || ""],
		tagRules: [(v) => !!v || ""],
		messageRules: [(v) => !!v || ""],
		emailRules: [
			(v) =>
				/.+@.+\..+/.test(v) ||
				"Please Enter Your Email Address In The Correct Format.",
		],
		phoneRules: [
			(v) =>
				(v && v.length == 10) ||
				"Please Enter Your Phone Number In The Correct Format. (Ex: 555 555 55 55)",
		],
		theme: false,
		drawer: false,
		group: null,

		tags: [
			{
				value: 1000,
				text: "Türkiye",
				descr: "Türkiye",
				color: "red",
				virtual: true,
				hidden: false,
				locked: false,
			},
			{
				value: 3,
				text: "Almanya",
				descr: "Almanya",
				color: "#25422b",
				virtual: false,
				hidden: false,
				locked: false,
			},
			{
				value: 2,
				text: "Fransa",
				descr: "Fransa",
				color: "#184f24",
				virtual: false,
				hidden: false,
				locked: false,
			},
			{
				value: 1001,
				text: "İngiltere",
				descr: "İngiltere",
				color: "#808080",
				virtual: true,
				hidden: false,
				locked: false,
			},
			{
				value: 1002,
				text: "A.B.D",
				descr: "A.B.D",
				color: "#808080",
				virtual: true,
				hidden: false,
				locked: false,
			},
		],
	}),
	watch: {
		theme(next) {
			this.$vuetify.theme.dark = next;
		},
	},
	methods: {
		validate() {
			this.$refs.form.validate();
		},
		send() {
			if (
				this.name.length == 0 ||
				this.email.length == 0 ||
				this.phone.length == 0 ||
				this.textAreaMessage.length == 0
			) {
				this.message = "Lütfen bilgileri eksiksiz doldurunuz";
			} else {
				this.$router.push("/");
			}
		},
	},
};
</script>
