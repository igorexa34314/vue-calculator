<template>
	<n-button circle class="panel-btn" @click="emit('btnClick', value)" :theme-overrides="buttonThemeOverrides" size="large"
		block>
		<template #default>
			<slot />
		</template>
		<template v-if="icon" #icon>
			<n-icon :component="icon" />
		</template>
	</n-button>
</template>

<script setup lang="ts">
import { Component } from 'vue';
import { NButton, NIcon, ButtonProps } from 'naive-ui';

type ButtonThemeOverrides = NonNullable<ButtonProps['themeOverrides']>

const props = defineProps<{
	value: string,
	icon?: Component
}>();

const emit = defineEmits<{
	(e: 'btnClick', value: typeof props.value): void
}>();

const buttonThemeOverrides: ButtonThemeOverrides = {
	// heightMedium: '50px',
	heightLarge: '55px',
	borderRadiusLarge: '50%',

	// textColor: 'rgba(24, 127, 231, 0.5)'
}
</script>

<style lang="scss">
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
// .bg-btn {
// 	background-color: $btn !important;
// }
// .text-btn-color {
// 	color: #373737 !important;
// }
// .body--dark {
// 	.text-btn-color {
// 		color: #FBFBFB !important;
// 	}
// 	.bg-btn {
// 		background-color: $btn-dark !important;
// 	}
// }
</style>