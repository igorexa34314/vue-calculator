<template>
	<q-item clickable class="expr-item q-pa-sm">
		<q-item-section v-ripple class="q-pa-md" @click="emit('runItem', expression)">
			<q-item-label lines="2" class="expr-item__problem q-mb-xs">{{ expression.problem + ' = ' }}</q-item-label>
			<q-item-label lines="1" class="expr-item__result">{{ expression.result }}</q-item-label>
		</q-item-section>
		<q-item-section side>
			<q-btn flat rounded text-color="icons" padding="sm" dense :icon="outlinedContentCopy"
				@click="copyProblem(expression)"></q-btn>
			<q-tooltip anchor="bottom middle" self="bottom middle" no-parent-event ref="copyMessage"
				class="text-caption">Copied to clipboard</q-tooltip>
		</q-item-section>
		<q-item-section side>
			<q-btn flat rounded text-color="icons" padding="sm" dense :icon="matDelete" @click="emit('deleteItem', expression)" />
		</q-item-section>
	</q-item>
</template>

<script setup lang="ts">
import { matDelete } from '@quasar/extras/material-icons';
import { outlinedContentCopy } from '@quasar/extras/material-icons-outlined';
import { ref } from 'vue';
import { QTooltip } from 'quasar';
import { Expression } from '@/types/Expression';

const props = defineProps<{
	expression: Expression
}>();

const emit = defineEmits<{
	(e: 'runItem', exp: Expression): void;
	(e: 'deleteItem', exp: Expression): void;
}>();

const copyMessage = ref<QTooltip>();
const copyProblem = async (exp: Expression) => {
	try {
		await navigator.clipboard.writeText(exp.problem + ' = ' + exp.result);
		copyMessage.value?.show();
		setTimeout(() => copyMessage.value?.hide(), 2000);
	} catch (err) {
		alert('Failed to copy');
	}
}
</script>

<style lang="scss" scoped>
.body--dark {
	.expr-item {
		&__problem {
			color: rgba(251, 251, 251, 0.5) !important;
		}
		&__result {
			color: #FBFBFB !important;
		}
	}
}
.expr {
	&-item {
		&__problem {
			font-size: 0.7em;
			color: rgba(55, 55, 55, 0.5) !important;
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