<template>
	<q-item clickable class="expr-item q-pa-sm">
		<q-item-section v-ripple class="q-pa-md" @click="$emit('runItem', exprItem)">
			<q-item-label lines="2" class="expr-item__problem q-mb-xs">{{ exprItem.problem + ' = ' }}</q-item-label>
			<q-item-label lines="1" class="expr-item__result">{{ exprItem.result }}</q-item-label>
		</q-item-section>
		<q-item-section side>
			<q-btn flat rounded text-color="icons" padding="sm" dense icon="o_content_copy"
				@click="copyProblem(exprItem)"></q-btn>
			<q-tooltip anchor="bottom middle" self="bottom middle" no-parent-event ref="copyMessage"
				class="text-caption">Copied to clipboard</q-tooltip>
		</q-item-section>
		<q-item-section side>
			<q-btn flat rounded text-color="icons" padding="sm" dense icon="delete" @click="$emit('deleteItem', exprItem)" />
		</q-item-section>
	</q-item>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
	exprItem: {
		type: Object,
		required: true,
	},
});

const copyMessage = ref();
const copyProblem = async exprItem => {
	try {
		await navigator.clipboard.writeText(exprItem.problem + ' = ' + exprItem.result);
		copyMessage.value.show();
		setTimeout(() => copyMessage.value.hide(), 2000);
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