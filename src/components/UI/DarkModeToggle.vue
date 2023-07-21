<template>
	<n-switch v-model:value="darkMode" size="large" v-bind="{ railStyle }" color="blue">
		<template #checked-icon>
			<n-icon :component="DarkModeOutlined" />
		</template>
		<template #unchecked-icon>
			<n-icon :component="LightModeOutlined" />
		</template>
	</n-switch>
</template>

<script setup lang="ts">
import { computed, CSSProperties } from 'vue';
import { NSwitch, NIcon } from 'naive-ui';
import { DarkModeOutlined, LightModeOutlined } from '@vicons/material';

const props = withDefaults(defineProps<{
	modelValue?: boolean;
}>(), {
	modelValue: false
});

const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void;
}>();

const darkMode = computed({
	get: () => props.modelValue,
	set: (val: boolean) => emit('update:modelValue', val)
});

const railStyle = ({
	focused,
	checked
}: {
	focused: boolean
	checked: boolean
}) => {
	const style: CSSProperties = {}
	if (checked) {
		style.background = '#d03050'
		if (focused) {
			style.boxShadow = '0 0 0 2px #d0305040'
		}
	} else {
		style.background = '#2080f0'
		if (focused) {
			style.boxShadow = '0 0 0 2px #2080f040'
		}
	}
	return style
}
</script>