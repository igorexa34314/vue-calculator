<template>
	<q-btn round dense class="panel-btn" @click="emit('btnClick', value)" color="btn" text-color="btn-color" size="1em"
		no-caps>
		<slot />
	</q-btn>
</template>

<script setup lang="ts">
const props = defineProps<{
	value: string
}>();

const emit = defineEmits<{
	(e: 'btnClick', value: typeof props.value): void
}>();
</script>

<style lang="scss">
@import "@/assets/styles/variables";
.bg-btn {
	background-color: $btn !important;
}
.text-btn-color {
	color: #373737 !important;
}
.body--dark {
	.text-btn-color {
		color: #FBFBFB !important;
	}
	.bg-btn {
		background-color: $btn-dark !important;
	}
}
</style>