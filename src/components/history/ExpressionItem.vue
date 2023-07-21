<template>
	<n-list-item class="expr-item q-pa-sm">
		<n-thing v-ripple class="q-pa-md" @click="emit('runItem', expression)">
			<template #header>
				<div lines="2" class="expr-item__problem q-mb-xs">{{ expression.problem + ' = ' }}</div>
			</template>
			<template #description>
				<div lines="1" class="expr-item__result">{{ expression.result }}</div>
			</template>
		</n-thing>
		<template #suffix>
			<n-button flat rounded text-color="icons" padding="sm" dense :icon="ContentCopyOutlined"
				@click="copyProblem(expression)" />
			<!-- <n-tooltip anchor="bottom middle" self="bottom middle" no-parent-event ref="copyMessage"
				class="text-caption">Copied to clipboard</n-tooltip> -->
			<n-button flat rounded text-color="icons" padding="sm" dense :icon="DeleteFilled"
				@click="emit('deleteItem', expression)" />
		</template>
	</n-list-item>
</template>

<script setup lang="ts">
import { NListItem, NButton, NThing } from 'naive-ui';
import { DeleteFilled, ContentCopyOutlined } from '@vicons/material';
import { ref } from 'vue';
import { Expression } from '@/types/Expression';

const props = defineProps<{
	expression: Expression
}>();

const emit = defineEmits<{
	(e: 'runItem', exp: Expression): void;
	(e: 'deleteItem', exp: Expression): void;
}>();

const copyProblem = async (exp: Expression) => {
	try {
		await navigator.clipboard.writeText(exp.problem + ' = ' + exp.result);
		// copyMessage.value?.show();
		// setTimeout(() => copyMessage.value?.hide(), 2000);
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