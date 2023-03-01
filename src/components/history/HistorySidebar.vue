<template>
	<q-drawer v-model="drawerOpen" class="bg-sidebar" side="right" :width="450" :breakpoint="1024" overlay elevated
		persistent>
		<q-scroll-area class="fit">
			<ExprList :exprItems="historyData" @deleteItem="exprItem => $emit('deleteItem', exprItem)" @runItem="runItem" />
		</q-scroll-area>
	</q-drawer>
</template>

<script setup lang="ts">
import ExprList from '@/components/history/ExprList.vue';
import type { Expression } from '@/types/Expression';
import { computed } from 'vue';
import type { PropType } from 'vue';

const emit = defineEmits<{
	(e: 'update:drawer', value: boolean): void,
	(e: 'runItem', item: Expression): void
}>();
const props = defineProps({
	historyData: {
		type: Array as PropType<Expression[]>,
		required: true,
	},
	drawer: {
		type: Boolean,
		default: false,
	}
});

const drawerOpen = computed({
	get: () => props.drawer,
	set: value => {
		emit('update:drawer', value);
	},
});
const runItem = (exprItem: Expression) => {
	emit('runItem', exprItem);
	emit('update:drawer', false);
};
</script>

<style lang="scss">
.body--dark {
	.bg-sidebar {
		background-color: rgba(51, 38, 38, 0.5);
	}
}
.bg-sidebar {
	background-color: $secondary;
}
</style>