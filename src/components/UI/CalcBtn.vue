<template>
	<q-btn round dense class="panel-btn" @click="$emit('btnClick', value)" color="btn" text-color="btn-color" no-caps>
		<slot></slot>
	</q-btn>
</template>

<script setup>
const props = defineProps({
	value: {
		type: [String, Number],
		required: true,
	}
});
</script>

<script>
export default { name: 'calc-btn' }
</script>

<style scoped lang="scss">
.panel-btn {
	width: 2.6em;
	height: 2.6em;
	@media(max-width: 450px) {
		width: 2.4em;
		height: 2.4em;
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