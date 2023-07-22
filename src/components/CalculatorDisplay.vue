<template>
	<div class="display column no-wrap">
		<div class="display__input row">
			<q-input ref="problemInput" v-model.trim="exprValue.problem" class="col-grow" input-class="problem" borderless
				:dense="!freeMode" autocomplete="off" :autofocus="freeMode" :readonly="!freeMode" :autogrow="freeMode"
				:placeholder="freeMode ? 'Type your full expression' : ''" />
		</div>
		<div class="display__input row no-wrap items-center" :class="freeMode ? 'q-mt-md' : ''">
			<span class="equals col-1">=</span>
			<q-input v-model="exprValue.result" class="q-pl-lg col-11" input-class="result" borderless dense readonly />
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Expression } from '@/types/Expression';

const emit = defineEmits<{
	(e: 'update:modelValue', value: Expression): void
}>();

const props = withDefaults(defineProps<{
	modelValue: Expression,
	freeMode?: boolean
}>(), {
	freeMode: false,
});

const exprValue = computed({
	get: () => ({ problem: props.modelValue.problem, result: props.modelValue.result.toString() }),
	set: (val) => emit('update:modelValue', val),
})
</script>

<style lang="scss">
.body--dark {
	.problem {
		color: rgba(251, 251, 251, 0.5) !important;
	}
	.result {
		color: #FBFBFB !important;
	}
	.display__input input, textarea {
		caret-color: #FBFBFB;
	}
}
.display {
	&__input {
		&:not(:last-child) {
			margin-bottom: 8px;
		}
		input, textarea {
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
	@media(max-width: 380px) {
		font-size: 0.85em;
	}
}
.result, .equals {
	font-size: 1.82em;
	line-height: 1.5 !important;
	@media(max-width: 380px) {
		font-size: 1.6em;
	}
}
.equals {
	padding-bottom: 2px;
}
</style>