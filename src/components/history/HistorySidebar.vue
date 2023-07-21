<template>
	<n-drawer v-model:show="drawerOpen" class="bg-sidebar" placement="right" :width="450" :breakpoint="1024" overlay
		elevated persistent>
		<n-drawer-content class="fit" :native-scrollbar="false">
			<ExpressionList :items="historyData" @deleteItem="exprItem => $emit('deleteItem', exprItem)" @runItem="runItem" />
		</n-drawer-content>
	</n-drawer>
</template>

<script setup lang="ts">
import { NDrawer, NDrawerContent } from 'naive-ui';
import ExpressionList from '@/components/history/ExpressionList.vue';
import { computed } from 'vue';
import { Expression } from '@/types/Expression';

const emit = defineEmits<{
	(e: 'update:drawer', value: boolean): void;
	(e: 'runItem', exp: Expression): void;
	(e: 'deleteItem', exp: Expression): void;
}>();

const props = withDefaults(defineProps<{
	historyData: Expression[],
	drawer?: boolean,
}>(), {
	drawer: false,
});

const drawerOpen = computed({
	get: () => props.drawer,
	set: value => emit('update:drawer', value)
});
const runItem = (exprItem: Expression) => {
	emit('runItem', exprItem);
	emit('update:drawer', false);
};
</script>

<style lang="scss">
// .body--dark {
// 	.bg-sidebar {
// 		background-color: rgba(51, 38, 38, 0.5);
// 	}
// }
// .bg-sidebar {
// 	background-color: $secondary;
// }
</style>