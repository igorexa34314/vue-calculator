<template>
	<n-button circle @click="emit('click', value)" :theme-overrides="buttonThemeOverrides" size="large" block>
		<template #default>
			<slot></slot>
		</template>
		<template v-if="icon" #icon>
			<n-icon :component="icon" />
		</template>
	</n-button>
</template>

<script setup lang="ts">
import { Component, computed } from 'vue';
import { NButton, NIcon, ButtonProps } from 'naive-ui';
import { useDarkModeStore } from '@/stores/darkMode';

const props = defineProps<{
	value: string;
	icon?: Component;
}>();

const emit = defineEmits<{
	click: [value: typeof props.value];
}>();

const darkModeStore = useDarkModeStore();

const buttonThemeOverrides = computed(
	() =>
		({
			heightMedium: '2.5em',
			heightLarge: '2.35em',
			borderRadiusLarge: '50%',
			fontSizeMedium: '0.9em',
			fontSizeSmall: '0.75em',
			...(darkModeStore.darkMode
				? { color: 'rgba(5, 5, 5, 0.3)', textColor: '#FBFBFB' }
				: { color: 'rgba(255, 255, 255, 0.3)', textColor: '#373737' }),
		}) as NonNullable<ButtonProps['themeOverrides']>
);
</script>
