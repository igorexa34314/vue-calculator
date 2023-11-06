<template>
	<q-btn
		round
		dense
		class="panel-btn"
		@click="emit('click', value as T)"
		color="btn"
		text-color="btn-color"
		size="1em"
		no-caps>
		<template #default>
			<slot name="default"></slot>
		</template>
		<template #loading>
			<slot name="loading"></slot>
		</template>
	</q-btn>
</template>

<script setup lang="ts" generic="T extends string">
import { QBtnSlots } from 'quasar';

const { value } = defineProps<{
	value: T;
}>();

const emit = defineEmits<{
	click: [value: T];
}>();

const slot = defineSlots<QBtnSlots>();
</script>

<style lang="scss">
@import '@/assets/styles/variables';
.bg-btn {
	background-color: $btn !important;
}
.text-btn-color {
	color: #373737 !important;
}
.body--dark {
	.text-btn-color {
		color: #fbfbfb !important;
	}
	.bg-btn {
		background-color: $btn-dark !important;
	}
}
</style>
