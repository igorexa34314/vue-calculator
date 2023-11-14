<template>
	<div class="display column no-wrap">
		<div class="display__input row">
			<v-text-field ref="problemInput" v-model.trim="exprValue.problem" class="col-grow" input-class="problem"
				:density="!freeMode ? 'comfortable' : 'default'" autocomplete="off" :autofocus="freeMode" :readonly="!freeMode"
				:autogrow="freeMode" :placeholder="freeMode ? 'Type your full expression' : ''" />
		</div>
		<v-row class="display__input" align="center" :class="freeMode ? 'mt-4' : ''">
			<v-col cols="11" class="equals">
				<span>=</span>
			</v-col>
			<v-col cols="1" class="result pl-6">
				<v-text-field v-model="exprValue.result" readonly density="comfortable" />
			</v-col>
		</v-row>
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
.display {
	&__input {
		&:not(:last-child) {
			margin-bottom: 8px;
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