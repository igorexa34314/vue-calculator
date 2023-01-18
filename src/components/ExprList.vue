<template>
	<q-list v-if="exprItems.length > 0" class="expr-list q-py-sm">
		<expr-item v-for="(exprItem, index) in exprItems" :exprItem="exprItem" :key="index"
			@runItem="exprItem => $emit('runItem', exprItem)" @deleteItem="exprItem => $emit('deleteItem', exprItem)" />
	</q-list>
	<div class="q-pa-xl" v-else>You have no history</div>
</template>

<script>
import ExprItem from '@/components/ExprItem.vue';

export default {
	components: {
		ExprItem,
	},
	props: {
		exprItems: {
			type: Array,
			required: true,
		},
	},
	setup() {
		return {
		}
	},
	name: 'expr-list',
}
</script>

<style lang="scss" scoped>
// .expr {
// 	&-list {}
// }
</style>