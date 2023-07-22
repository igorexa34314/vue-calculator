<template>
	<div class="display column no-wrap">
		<div class="display__input row">
			<n-input ref="problemInput" v-model:value="exprValue.problem" class="col-grow" input-class="problem" borderless
				:dense="!freeMode" autocomplete="off" :autofocus="freeMode" :readonly="!freeMode" :autogrow="freeMode"
				:placeholder="freeMode ? 'Type your full expression' : ''" />
		</div>
		<n-grid cols="8" class="display__input row no-wrap items-center" :class="freeMode ? 'q-mt-md' : ''">
			<n-gi class="equals col-1">=</n-gi>
			<n-gi span="7" class="equals col-1"> <n-input v-model:value="exprValue.result" class="q-pl-lg col-11"
					input-class="result" borderless dense readonly />
			</n-gi>
		</n-grid>
	</div>
</template>

<script setup lang="ts">
import { NGrid, NGi, NInput } from 'naive-ui';
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
	set: (val: { problem: string; result: string }) => emit('update:modelValue', val),
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