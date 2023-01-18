<template>
	<q-drawer v-model="drawerOpen" class="bg-sidebar" side="right" :width="450" :breakpoint="1024" overlay elevated
		persistent>
		<q-scroll-area class="fit">
			<ExprList :exprItems="historyData" @deleteItem="exprItem => { $emit('deleteItem', exprItem) }"
				@runItem="exprItem => { $emit('runItem', exprItem) }" />
		</q-scroll-area>
	</q-drawer>
</template>

<script>
import { computed } from 'vue';

import ExprList from '@/components/ExprList.vue';

export default {
	components: {
		ExprList,
	},
	props: {
		historyData: {
			type: Array,
			required: true,
		},
		drawer: {
			type: Boolean,
			default: false,
		}
	},
	setup(props, { emit }) {
		const drawerOpen = computed({
			get: () => props.drawer,
			set: value => {
				emit('update:drawer', value);
			},
		});
		const toggleDrawer = () => {
			drawerOpen.value = !drawerOpen.value;
		}

		return {
			drawerOpen, toggleDrawer,
		}
	},
	name: 'history-sidebar',
}
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