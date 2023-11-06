<template>
	<n-switch v-model:value="darkModeStore.darkMode" size="large" v-bind="{ railStyle }" color="blue">
		<template #checked-icon>
			<n-icon :component="DarkModeOutlined" />
		</template>
		<template #unchecked-icon>
			<n-icon :component="LightModeOutlined" />
		</template>
	</n-switch>
</template>

<script setup lang="ts">
import { CSSProperties } from 'vue';
import { NSwitch, NIcon } from 'naive-ui';
import { DarkModeOutlined, LightModeOutlined } from '@vicons/material';
import { useDarkModeStore } from '@/stores/darkMode';

const darkModeStore = useDarkModeStore();

const railStyle = ({ focused, checked }: { focused: boolean; checked: boolean }) => {
	const style: CSSProperties = {};
	if (checked) {
		style.background = '#d03050';
		if (focused) {
			style.boxShadow = '0 0 0 2px #d0305040';
		}
	} else {
		style.background = '#2080f0';
		if (focused) {
			style.boxShadow = '0 0 0 2px #2080f040';
		}
	}
	return style;
};
</script>
