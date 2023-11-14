<template>
	<div class="d-flex flex-column">
		<v-row class="panel" align="center" justify="space-between">
			<v-col cols="9" class="column justify-between q-col-gutter-y-lg">
				<div class="actions col-grow row no-wrap q-gutter-x-md justify-between">
					<PanelBtn v-for="action in actions" :key="action" :value="action" @btnClick="enterCharacter" color="actions"
						:icon="action === 'bs' ? mdiBackspaceOutline : undefined">{{ action !== 'bs' ? action : '' }}</PanelBtn>
				</div>
				<div class="numbers col-grow row wrap items-start justify-between q-gutter-x-md q-gutter-y-lg">
					<PanelBtn v-for="num in numbers.slice(0, 9)" :key="num" :value="num"
						v-on="!isNaN(+num) || num === '.' ? { btnClick: enterCharacter } : {}">{{ num }}</PanelBtn>
				</div>
			</v-col>
			<v-col cols="3" class="operators d-flex flex-column align-end">
				<PanelBtn v-for="op in operators" :key="op.name" :value="op.name" @btnClick="enterCharacter" color="operators"
					:icon="op.icon || undefined">{{ op.icon ? '' : op.name }}</PanelBtn>
			</v-col>
		</v-row>
		<v-row class="specs d-flex flex-nowrap justify-between">
			<PanelBtn v-for="spec in numbers.slice(9)" :key="spec" :value="spec" @btnClick="enterCharacter">
				{{ spec }}</PanelBtn>
		</v-row>
		<v-row class="trigonometry d-flex flex-nowrap justify-between">
			<PanelBtn v-for="trg in trigonometry" :key="trg" :value="trg" @btnClick="enterCharacter">{{ trg }}</PanelBtn>
		</v-row>
	</div>
</template>

<script setup lang="ts">
import PanelBtn from '@/components/UI/PanelBtn.vue';
import { mdiBackspaceOutline, mdiSquareRoot, mdiExponent } from '@mdi/js';

const emit = defineEmits<{
	enterCharacter: [character: string]
}>();

const actions = ['AC', 'bs', 'e'];
const operators = [
	{ name: 'sqrt', icon: mdiSquareRoot },
	{ name: '^', icon: mdiExponent },
	{ name: 'log' },
	{ name: 'exp' },
];
const numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '(', ')'];
const trigonometry = ['sin', 'cos', 'tan', '='];

const enterCharacter = (ch: string) => emit('enterCharacter', ch);
</script>
