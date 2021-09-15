<template>
	<div class="locale-changer">
		<v-select
			v-model="$i18n.locale"
			prepend-inner-icon="mdi-web"
			color="#de2228"
			:items="langs"
			class="mt-5 ml-3 text-center align-center"
			style="width:100px;"
		></v-select>
	</div>
</template>

<script>
export default {
	name: "locale-changer",
	data() {
		return {
			langs: [
				{
					value: "tr",
					text: "TR",
					descr: "Turkish",
					color: "#de2228",
					virtual: true,
					hidden: false,
					locked: false,
				},
				{
					value: "en",
					text: "EN",
					descr: "English",
					color: "#de2228",
					virtual: true,
					hidden: false,
					locked: false,
				},
			],
		};
	},
};
</script>
