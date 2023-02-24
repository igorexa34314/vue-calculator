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

<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
	modelValue: {
		type: Object,
		default: () => ({}),
	},
	freeMode: {
		type: Boolean,
		default: false,
	},
});

const exprValue = computed({
	get: () => props.modelValue,
	set: value => {
		emit('update:modelValue', value);
	},
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