<template>
	<q-list v-if="items.length > 0" class="expr-list q-py-sm">
		<ExpressionItem
			v-for="(item, index) in items"
			:expression="item"
			:key="index"
			@runItem="item => emit('runItem', item)"
			@deleteItem="item => emit('deleteItem', item)" />
	</q-list>
	<div class="q-pa-xl" v-else>You have no history</div>
</template>

<script setup lang="ts" generic="T extends Expression">
import ExpressionItem from '@/components/history/ExpressionItem.vue';
import { Expression } from '@/stores/history';

const { items } = defineProps<{
	items: T[];
}>();

const emit = defineEmits<{
	runItem: [exp: T];
	deleteItem: [exp: T];
}>();
</script>
