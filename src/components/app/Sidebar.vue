<template>
	<q-drawer
		v-model="drawer"
		class="bg-sidebar"
		side="right"
		:width="450"
		:breakpoint="1024"
		overlay
		elevated
		persistent>
		<q-scroll-area class="fit">
			<ExpressionList
				:items="historyData"
				@deleteItem="exprItem => emit('deleteItem', exprItem)"
				@runItem="runItem" />
		</q-scroll-area>
	</q-drawer>
</template>

<script setup lang="ts" generic="T extends Expression">
import ExpressionList from '@/components/history/ExpressionList.vue';
import { Expression } from '@/stores/history';

const { historyData } = defineProps<{
	historyData: T[];
}>();

const emit = defineEmits<{
	runItem: [exp: T];
	deleteItem: [exp: T];
}>();

const drawer = defineModel<boolean>('drawer', { default: false });

const runItem = (exprItem: T) => {
	emit('runItem', exprItem);
	drawer.value = false;
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
