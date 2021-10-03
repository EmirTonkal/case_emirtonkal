<template>
	<div id="app">
		<v-app id="inspire">
			<v-app-bar app clipped-left>
				<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

				<v-toolbar-title style="color:#de2228" class="font-weight-bold">{{
					$t("main.welcomeToScorp")
				}}</v-toolbar-title>

				<v-spacer></v-spacer>

				<v-card height="36" width="200"
					><v-text-field
						class="mx-3"
						:placeholder="$t('main.search')"
						append-icon="mdi-magnify"
						color="#de2228"
					></v-text-field
				></v-card>
				<v-spacer />

				<!-- <v-btn class="ml-2">
					Geçmiş
					<v-icon class="ml-2">mdi-magnify</v-icon>
				</v-btn> -->

				<language-switcher></language-switcher>

				<v-menu left bottom>
					<template v-slot:activator="{ on }">
						<v-btn icon v-on="on">
							<v-icon>mdi-dots-vertical</v-icon>
						</v-btn>
					</template>

					<v-list>
						<v-btn>
							{{ $t("main.favorites") }}
							<v-icon class="" color="#de2228">mdi-heart</v-icon> </v-btn
						><br />
						<v-btn class="mt-2" style="width:140px" to="/login">
							{{ $t("main.logout") }}
							<v-icon>mdi-cancel</v-icon>
						</v-btn>

						<!-- <v-switch
							v-model="theme"
							:label="$t('main.theme')"
							color="#de2228"
							hide-details
							class="ml-2"
						></v-switch> -->
					</v-list>
				</v-menu>
			</v-app-bar>

			<v-navigation-drawer v-model="drawer" absolute temporary>
				<v-list nav dense>
					<v-list-item-group v-model="group" active-class="red--text">
						<v-list-item to="#">
							<v-list-item-icon>
								<v-icon>mdi-home</v-icon>
							</v-list-item-icon>
							<v-list-item-title>{{ $t("main.home") }}</v-list-item-title>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-navigation-drawer>

			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center" dense>
					<v-col cols="12" sm="8" md="8">
						<v-card elevation="12" class="px-10 py-10 rounded border ">
							<h3 class="text-center mt-5" style="color:#de2228">Scorp</h3>
							<v-card-text
								>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
								ut turpis a mi laoreet cursus eget vel nisl. Donec interdum
								neque a neque viverra tincidunt. In sed purus in nulla eleifend
								rhoncus. Vivamus sit amet lacus ut massa tincidunt ullamcorper
								id ut tortor. Etiam sit amet erat vel velit mollis imperdiet nec
								at lacus. Curabitur augue quam, facilisis ut ante finibus,
								placerat eleifend urna. Phasellus at maximus lorem. Ut ante
								massa, mollis nec pellentesque quis, egestas eu metus. Aliquam
								malesuada, velit eget condimentum porta, urna ligula interdum
								dui, in dignissim tellus lorem eu ligula. Quisque cursus tortor
								sit amet lectus ornare, vitae luctus orci euismod. Sed tincidunt
								tellus velit, vel convallis dui facilisis ut. Donec viverra
								ultrices nunc, eget gravida metus tincidunt sit amet. Vivamus et
								lacinia ex, ut ultricies massa.</v-card-text
							>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-app>
	</div></template
>

<script>
import LanguageSwitcher from "../components/LanguageSwitcher.vue";

export default {
	data: () => ({
		theme: false,
		drawer: false,
		group: null,
	}),

	props: {
		source: String,
	},
	components: { LanguageSwitcher },
	watch: {
		theme(next) {
			this.$vuetify.theme.dark = next;
		},
	},
	methods: {
		test() {
			return this.$store.state.users;
		},
	},
};
</script>

<style>
@media only screen and (max-width: 500px) {
	.v-toolbar__title {
		display: none;
	}
	.v-btn {
		margin-left: 2%;
	}
}
</style>
