<template>
	<q-drawer v-model="drawerOpen" class="bg-sidebar" side="right" :width="450" :breakpoint="1024" overlay elevated
		persistent>
		<q-scroll-area class="fit">
			<ExprList :exprItems="historyData" @deleteItem="exprItem => { $emit('deleteItem', exprItem) }"
				@runItem="exprItem => { $emit('runItem', exprItem) }" />
		</q-scroll-area>
	</q-drawer>
</template>

<script setup>
import ExprList from '@/components/ExprList.vue';
import { computed } from 'vue';

const emit = defineEmits(['deleteItem', 'runItem', 'update:drawer']);
const props = defineProps({
	historyData: {
		type: Array,
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