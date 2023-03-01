<template>
	<q-list v-if="exprItems.length > 0" class="expr-list q-py-sm">
		<ExprItem v-for="(exprItem, index) in exprItems" :exprItem="exprItem" :key="index"
			@runItem="exprItem => $emit('runItem', exprItem)" @deleteItem="exprItem => $emit('deleteItem', exprItem)" />
	</q-list>
	<div class="q-pa-xl" v-else>You have no history</div>
</template>

<script setup lang="ts">
import ExprItem from '@/components/history/ExprItem.vue';
import type { Expression } from '@/types/Expression';
import type { PropType } from 'vue';

const props = defineProps({
	exprItems: {
		type: Array as PropType<Expression[]>,
		required: true,
	},
});
</script>

<style lang="scss" scoped></style>