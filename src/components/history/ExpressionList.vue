<template>
	<v-list v-if="items.length > 0" class="expr-list q-py-sm">
		<ExpressionItem v-for="(item, index) in items" :expression="item" :key="index"
			@runItem="item => emit('runItem', item)" @deleteItem="item => emit('deleteItem', item)" />
	</v-list>
	<div v-else class="pa-6">You have no history</div>
</template>

<script setup lang="ts">
import ExpressionItem from '@/components/history/ExpressionItem.vue';
import { Expression } from '@/types/Expression';

const props = defineProps<{
	items: Expression[],
}>();

const emit = defineEmits<{
	runItem: [exp: Expression]
	deleteItem: [exp: Expression]
}>();
</script>