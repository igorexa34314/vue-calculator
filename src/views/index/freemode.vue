<template>
	<n-grid cols="4" x-gap="12" y-gap="12" class="panel row wrap justify-between items-stretch q-pb-sm">
		<n-gi v-for="action in actions" :key="action" class="actions col-grow row no-wrap q-gutter-x-md justify-between">
			<PanelBtn :value="action" @click="(ch: string) => emit('enterChar', ch)">{{ action }}</PanelBtn>
		</n-gi>
	</n-grid>
</template>

<script setup lang="ts">
import { NGrid, NGi } from 'naive-ui';
import PanelBtn from '@/components/UI/PanelBtn.vue';

const emit = defineEmits<{
	enterChar: [ch: string];
}>();

const actions = ['AC', '+/-', '%', '='];
</script>

<style lang="scss">
// .operators {
// 	@media(max-width: $breakpoint-sm) {
// 		padding-left: 0 !important;
// 		padding-right: 0 !important;
// 	}
// }
// .bg-actions {
// 	background-color: rgba(104, 94, 190, 0.3) !important;
// }
</style>
