<template>
	<div class="display column no-wrap">
		<div class="display__input row">
			<n-input
				ref="problemInput"
				v-model:value="expression.problem"
				class="col-grow"
				borderless
				:dense="!freeMode"
				autocomplete="off"
				:autofocus="freeMode"
				:readonly="!freeMode"
				:autogrow="freeMode"
				:theme-overrides="{ ...inputThemeOverrides, ...inputProblemThemeOverrides }"
				:placeholder="freeMode ? 'Type your full expression' : ''" />
		</div>
		<n-grid cols="8" class="display__input row no-wrap items-center" :class="freeMode ? 'q-mt-md' : ''">
			<n-gi class="equals">=</n-gi>
			<n-gi span="7" class>
				<n-input
					v-model:value="expression.result"
					class="q-pl-lg col-11"
					:theme-overrides="{ ...inputThemeOverrides, ...inputResultThemeOverrides }"
					borderless
					dense
					readonly />
			</n-gi>
		</n-grid>
	</div>
</template>

<script setup lang="ts">
import { NGrid, NGi, NInput, InputProps } from 'naive-ui';
import { Expression } from '@/stores/history';
import { computed } from 'vue';
import { useDarkModeStore } from '@/stores/darkMode';

const { freeMode } = defineProps<{
	freeMode?: boolean;
}>();

const exprValue = defineModel<Expression>('modelValue', { required: true });

const expression = computed({
	get: () =>
		(Object.keys(exprValue.value) as (keyof Expression)[]).reduce(
			(acc, key) => {
				acc[key] = exprValue.value[key].toString();
				return acc;
			},
			{} as Record<keyof Expression, string>
		),
	set: (val: Record<keyof Expression, string>) => val,
});

const darkModeStore = useDarkModeStore();

const inputProblemThemeOverrides: NonNullable<InputProps['themeOverrides']> = {
	color: 'rgba(55, 55, 55, 0.5)',
	fontSizeSmall: '0.85em',
};
const inputResultThemeOverrides: NonNullable<InputProps['themeOverrides']> = {
	fontSizeLarge: '1.82em',
	lineHeight: '1.5',
	fontSizeSmall: '1.6em',
};
const inputThemeOverrides = computed(
	() =>
		({
			lineHeightTextarea: '1.33',
			...(darkModeStore.darkMode
				? { color: '#fbfbfb', caretColor: '#fbfbfb' }
				: { color: 'rgba(255, 255, 255, 0.3)', caretColor: '#373737' }),
		}) as NonNullable<InputProps['themeOverrides']>
);
</script>

<style lang="scss" scoped>
.display {
	&__input {
		&:not(:last-child) {
			margin-bottom: 8px;
		}
		input {
			text-align: right;
		}
	}
}
.equals {
	padding-bottom: 2px;
	font-size: 1.82em;
	line-height: 1.5 !important;
	@media (max-width: 380px) {
		font-size: 1.6em;
	}
}
</style>
