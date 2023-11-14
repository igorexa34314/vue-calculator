<template>
	<v-list-item class="expr-item pa-3" @click="emit('runItem', expression)">
		<v-list-item-subtitle class="expr-item__problem q-mb-xs">{{ expression.problem + ' = ' }}</v-list-item-subtitle>
		<v-list-item-title class="expr-item__result">{{ expression.result }}</v-list-item-title>
		<v-list-item-action end>
			<v-btn rounded color="icons" padding="sm" :icon="mdiContentCopy" @click="copyProblem(expression)" />
		</v-list-item-action>
		<v-list-item-action end>
			<v-btn rounded color="icons" padding="sm" :icon="mdiDelete" @click="emit('deleteItem', expression)" />
		</v-list-item-action>
	</v-list-item>
</template>

<script setup lang="ts">
import { mdiDelete, mdiContentCopy } from '@mdi/js';
import { Expression } from '@/types/Expression';
import { useSnackbarStore } from '@/stores/snackbar';

const props = defineProps<{
	expression: Expression
}>();

const emit = defineEmits<{
	runItem: [exp: Expression]
	deleteItem: [exp: Expression]
}>();

const { notify } = useSnackbarStore();
const copyProblem = async (exp: Expression) => {
	try {
		await navigator.clipboard.writeText(exp.problem + ' = ' + exp.result);
		notify({
			message: 'Copied to clipboard',
			type: 'success',
		});
	} catch (err) {
		console.error(err);
		notify({
			message: 'Copied to clipboard',
			type: 'error',
		});
	}
}
</script>

<style lang="scss" scoped>
.expr {
	&-item {
		&__problem {
			font-size: 0.7em;
			@media(max-width: 380px) {
				font-size: 0.6em;
			}
		}
		&__result {
			line-height: 1.5 !important;
			@media(max-width: 380px) {
				font-size: 0.85em;
			}
		}
	}
}
</style>