<template>
	<q-btn round dense class="panel-btn" @click="$emit('btnClick', value)" color="btn" text-color="btn-color" no-caps>
		<slot />
	</q-btn>
</template>

<script setup lang="ts">

const props = defineProps({
	value: {
		type: [String, Number],
		required: true,
	}
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables";
.panel-btn {
	width: 2.5em;
	height: 2.5em;
	@media(max-width: 450px) {
		width: 2.35em;
		height: 2.35em;
		font-size: 0.9em;
	}
	@media(max-width: 360px) {
		font-size: 0.75em;
	}
}
.bg-btn {
	background-color: $btn !important;
}
.text-btn-color {
	color: #373737;
}
.body--dark {
	.text-btn-color {
		color: #FBFBFB;
	}
	.bg-btn {
		background-color: $btn-dark !important;
	}
}
</style>