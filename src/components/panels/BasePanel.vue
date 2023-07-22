<template>
	<n-grid cols="12" x-gap="12" y-gap="12" class="panel row wrap justify-between items-stretch q-pb-sm">
		<n-gi span="9" class="col-9 column q-px-sm justify-between q-col-gutter-y-lg">
			<n-grid cols="3" x-gap="12" y-gap="12">
				<n-gi v-for="action in actions" :key="action"
					class="actions col-grow row no-wrap q-gutter-x-md justify-between">
					<PanelBtn :value="action" @btnClick="enterCharacter">{{
						action }}</PanelBtn>
				</n-gi>
				<n-gi v-for="num in numbers" :key="num"
					class="numbers col-grow row wrap items-start justify-between q-gutter-x-md q-gutter-y-lg">
					<PanelBtn :value="num" v-on="!isNaN(+num) || num === '.' ? { btnClick: enterCharacter } : {}">{{ num }}
					</PanelBtn>
				</n-gi>
			</n-grid>
		</n-gi>
		<n-gi span="3">
			<n-grid cols="1" x-gap="12" y-gap="12">
				<n-gi v-for="op in operators" :key="op">
					<PanelBtn :value="op" @btnClick="enterCharacter" class="operators">{{
						op
					}}</PanelBtn>
				</n-gi>
			</n-grid>
		</n-gi>
	</n-grid>
</template>

<script setup lang="ts">
import { NGrid, NGi } from 'naive-ui';
import PanelBtn from '@/components/UI/PanelBtn.vue';

const emit = defineEmits<{
	(e: 'enterCharacter', character: string): void
}>();

const actions = ['AC', '+/-', '%'];
const operators = ['×', '÷', '-', '+', '='];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '00'];

const enterCharacter = (ch: string) => emit('enterCharacter', ch);
</script>

<style lang="scss">
// .body--dark {
// 	.bg-operators {
// 		background-color: $blue-grey-8 !important;
// 	}
// }
// .panel {
// 	.col-9 {
// 		@media(max-width: $breakpoint-sm) {
// 			padding-right: 0.5em !important;
// 		}
// 	}
// }
// .operators {
// 	@media(max-width: $breakpoint-sm) {
// 		padding-left: 0 !important;
// 		padding-right: 0 !important;
// 	}
// }
// .bg-actions {
// 	background-color: rgba(104, 94, 190, 0.3) !important;
// }
// .bg-operators {
// 	background-color: $blue-grey-2 !important;
// }
</style>