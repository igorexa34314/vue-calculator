<template>
	<n-list v-if="items.length > 0" hoverable clickable class="expr-list q-py-sm">
		<ExpressionItem v-for="(item, index) in items" :expression="item" :key="index"
			@runItem="item => emit('runItem', item)" @deleteItem="item => emit('deleteItem', item)" />
	</n-list>
	<div class="q-pa-xl" v-else>You have no history</div>
</template>

<script setup lang="ts">
import { NList } from 'naive-ui';
import ExpressionItem from '@/components/history/ExpressionItem.vue';
import { Expression } from '@/types/Expression';

const props = defineProps<{
	items: Expression[],
}>();

const emit = defineEmits<{
	(e: 'runItem', exp: Expression): void;
	(e: 'deleteItem', exp: Expression): void;
}>();
</script>

<style lang="scss" scoped></style>