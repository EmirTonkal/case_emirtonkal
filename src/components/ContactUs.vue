<template>
	<div id="app">
		<v-app>
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
								<div style="display:flex;justify-content:center ">
									<div>
										<v-btn
											rounded
											color="secondary"
											class="mb-3 mr-3"
											to="/login"
											>{{ $t("contactUs.giveUp") }}</v-btn
										>
									</div>
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
export default {
	components: {},

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
				text: "TR",
				color: "red",
				virtual: true,
				hidden: false,
				locked: false,
			},
			{
				value: 3,
				text: "GER",
				color: "#25422b",
				virtual: false,
				hidden: false,
				locked: false,
			},
			{
				value: 2,
				text: "FR",
				color: "#184f24",
				virtual: false,
				hidden: false,
				locked: false,
			},
			{
				value: 1001,
				text: "ENG",
				color: "#808080",
				virtual: true,
				hidden: false,
				locked: false,
			},
			{
				value: 1002,
				text: "ABD",
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
				this.$router.push("/login");
			}
		},
	},
};
</script>
