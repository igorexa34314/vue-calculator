<template>
	<v-navigation-drawer v-model="drawerOpen" color="sidebar" location="right" width="450px" temporary>
		<v-virtual-scroll>
			<ExpressionList :items="historyData" @deleteItem="exprItem => emit('deleteItem', exprItem)" @runItem="runItem" />
		</v-virtual-scroll>
	</v-navigation-drawer>
</template>

<script setup lang="ts">
import ExpressionList from '@/components/history/ExpressionList.vue';
import { computed } from 'vue';
import { Expression } from '@/types/Expression';

const props = withDefaults(defineProps<{
	historyData: Expression[],
	drawer?: boolean,
}>(), {
	drawer: false,
});

const emit = defineEmits<{
	'update:drawer': [value: boolean]
	runItem: [exp: Expression]
	deleteItem: [exp: Expression]
}>();

const drawerOpen = computed({
	get: () => props.drawer,
	set: value => emit('update:drawer', value)
});
const runItem = (exprItem: Expression) => {
	emit('runItem', exprItem);
	emit('update:drawer', false);
};
</script>