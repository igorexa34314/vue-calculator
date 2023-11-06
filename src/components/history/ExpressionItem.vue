<template>
	<q-item clickable class="expr-item q-pa-sm">
		<q-item-section v-ripple class="q-pa-md" @click="emit('runItem', expression as T)">
			<q-item-label lines="2" class="expr-item__problem q-mb-xs">{{
				(expression as T).problem + ' = '
			}}</q-item-label>
			<q-item-label lines="1" class="expr-item__result">{{ (expression as T).result }}</q-item-label>
		</q-item-section>
		<q-item-section side>
			<q-btn
				flat
				rounded
				text-color="icons"
				padding="sm"
				dense
				:icon="outlinedContentCopy"
				@click="copyProblem(expression as T)"></q-btn>
		</q-item-section>
		<q-item-section side>
			<q-btn
				flat
				rounded
				text-color="icons"
				padding="sm"
				dense
				:icon="matDelete"
				@click="emit('deleteItem', expression as T)" />
		</q-item-section>
	</q-item>
</template>

<script setup lang="ts" generic="T extends Expression">
import { matDelete, matClose, matCheckCircle, matWarning } from '@quasar/extras/material-icons';
import { outlinedContentCopy } from '@quasar/extras/material-icons-outlined';
import { Expression } from '@/stores/history';
import { useQuasar } from 'quasar';

const { expression } = defineProps<{
	expression: T;
}>();

const emit = defineEmits<{
	runItem: [exp: T];
	deleteItem: [exp: T];
}>();

const { notify } = useQuasar();
const copyProblem = async (exp: T) => {
	try {
		await navigator.clipboard.writeText(exp.problem + ' = ' + exp.result);
		notify({
			message: 'Copied to clipboard',
			type: 'positive',
			icon: matCheckCircle,
			actions: [{ icon: matClose, color: 'white', size: 'sm', round: true }],
		});
	} catch (err) {
		console.error(err);
		notify({
			message: 'Copied to clipboard',
			type: 'negative',
			icon: matWarning,
			actions: [{ icon: matClose, size: 'sm', color: 'white', round: true }],
		});
	}
};
</script>

<style lang="scss" scoped>
.body--dark {
	.expr-item {
		&__problem {
			color: rgba(251, 251, 251, 0.5) !important;
		}
		&__result {
			color: #fbfbfb !important;
		}
	}
}
.expr {
	&-item {
		&__problem {
			font-size: 0.7em;
			color: rgba(55, 55, 55, 0.5) !important;
			@media (max-width: 380px) {
				font-size: 0.6em;
			}
		}
		&__result {
			line-height: 1.5 !important;
			@media (max-width: 380px) {
				font-size: 0.85em;
			}
		}
	}
}
</style>
