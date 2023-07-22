<template>
	<n-grid cols="12" x-gap="12" y-gap="12" class="panel row wrap justify-between items-center q-col-gutter-y-lg q-pb-sm">
		<n-gi span="9" class="col-9 column q-pr-md q-pl-xs justify-between q-col-gutter-y-lg">
			<n-grid cols="3" x-gap="12" y-gap="12" class="actions col-grow row no-wrap q-gutter-x-md justify-between">
				<n-gi v-for="action in actions" :key="action">
					<PanelBtn :value="action" @btnClick="enterCharacter"
						:icon="action === 'bs' ? BackspaceOutlined : undefined">{{ action !== 'bs' ? action : '' }}</PanelBtn>
				</n-gi>
				<n-gi v-for="num in numbers.slice(0, 9)" :key="num"
					class="numbers col-grow row wrap items-start justify-between q-gutter-x-md q-gutter-y-lg">
					<PanelBtn :value="num" v-on="!isNaN(+num) || num === '.' ? { btnClick: enterCharacter } : {}">{{ num }}
					</PanelBtn>
				</n-gi>
			</n-grid>
		</n-gi>
		<n-gi span="3" class="operators col-3 column q-px-sm q-gutter-y-lg items-center">
			<n-grid cols="1" x-gap="12" y-gap="12">
				<n-gi v-for="op in operators" :key="op.name">
					<PanelBtn :value="op.name" @btnClick="enterCharacter" :icon="op.icon || undefined">{{ op.icon ? '' : op.name
					}}</PanelBtn>
				</n-gi>
			</n-grid>
		</n-gi>
		<n-gi span="12" class="specs col-12 self-stretch row no-wrap justify-between q-gutter-x-lg">
			<n-grid cols="4" x-gap="12" y-gap="12">
				<n-gi v-for="spec in numbers.slice(9)" :key="spec">
					<PanelBtn :value="spec" @btnClick="enterCharacter">
						{{ spec }}</PanelBtn>
				</n-gi>
			</n-grid>
		</n-gi>
		<n-gi span="12">
			<n-grid cols="4" x-gap="12" y-gap="12"
				class="trigonometry col-12 self-stretch row no-wrap justify-between q-gutter-x-lg">
				<n-gi v-for="trg in trigonometry" :key="trg">
					<PanelBtn :value="trg" @btnClick="enterCharacter">{{ trg }}</PanelBtn>
				</n-gi>
			</n-grid>
		</n-gi>
	</n-grid>
</template>

<script setup lang="ts">
import { NGrid, NGi } from 'naive-ui';
import PanelBtn from '@/components/UI/PanelBtn.vue';
import { BackspaceOutlined } from '@vicons/material';
import { SquareRootAlt, AngleUp } from '@vicons/fa';

const emit = defineEmits<{
	(e: 'enterCharacter', character: string): void
}>();

const actions = ['AC', 'bs', 'e'];
const operators = [
	{ name: 'sqrt', icon: SquareRootAlt },
	{ name: '^', icon: AngleUp },
	{ name: 'log' },
	{ name: 'exp' },
];
const numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '(', ')'];
const trigonometry = ['sin', 'cos', 'tan', '='];

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
// .operators button, .actions button {
// 	.q-icon {
// 		font-size: 1em !important;
// 	}
// }
</style>