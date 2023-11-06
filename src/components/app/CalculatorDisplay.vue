<template>
	<div class="display column no-wrap">
		<div class="display__input row">
			<q-input
				ref="problemInput"
				v-model.trim="expression.problem"
				class="col-grow"
				input-class="problem"
				borderless
				:dense="!freeMode"
				autocomplete="off"
				:autofocus="freeMode"
				:readonly="!freeMode"
				:autogrow="freeMode"
				:placeholder="freeMode ? 'Type your full expression' : ''" />
		</div>
		<div class="display__input row no-wrap items-center" :class="freeMode ? 'q-mt-md' : ''">
			<span class="equals col-1">=</span>
			<q-input v-model="expression.result" class="q-pl-lg col-11" input-class="result" borderless dense readonly />
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Expression } from '@/stores/history';

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
</script>

<style lang="scss">
.body--dark {
	.problem {
		color: rgba(251, 251, 251, 0.5) !important;
	}
	.result {
		color: #fbfbfb !important;
	}
	.display__input input,
	textarea {
		caret-color: #fbfbfb;
	}
}
.display {
	&__input {
		&:not(:last-child) {
			margin-bottom: 8px;
		}
		input,
		textarea {
			caret-color: #373737;
		}
		textarea {
			line-height: 1.33 !important;
		}
		input {
			text-align: right;
		}
	}
}
.problem {
	color: rgba(55, 55, 55, 0.5) !important;
	@media (max-width: 380px) {
		font-size: 0.85em;
	}
}
.result,
.equals {
	font-size: 1.82em;
	line-height: 1.5 !important;
	@media (max-width: 380px) {
		font-size: 1.6em;
	}
}
.equals {
	padding-bottom: 2px;
}
</style>
