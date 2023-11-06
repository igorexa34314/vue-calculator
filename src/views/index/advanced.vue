<template>
	<div class="column q-col-gutter-y-lg">
		<div class="panel row wrap justify-between items-center q-col-gutter-lg">
			<div class="col-9 column justify-between q-col-gutter-y-lg">
				<div class="actions col-grow row no-wrap q-gutter-x-md justify-between">
					<PanelBtn
						v-for="action in actions"
						:key="action"
						:value="action"
						@click="(ch: string) => emit('enterChar', ch)"
						color="actions"
						:icon="action === 'bs' ? outlinedBackspace : undefined"
						>{{ action !== 'bs' ? action : '' }}</PanelBtn
					>
				</div>
				<div class="numbers col-grow row wrap items-start justify-between q-gutter-x-md q-gutter-y-lg">
					<PanelBtn
						v-for="num in numbers.slice(0, 9)"
						:key="num"
						:value="num"
						v-on="!isNaN(+num) || num === '.' ? { click: (ch: string) => emit('enterChar', ch) } : {}"
						>{{ num }}</PanelBtn
					>
				</div>
			</div>
			<div class="operators col-3 column q-gutter-y-lg items-end">
				<PanelBtn
					v-for="op in operators"
					:key="op.name"
					:value="op.name"
					@click="(ch: string) => emit('enterChar', ch)"
					color="operators"
					:icon="op.icon || undefined"
					>{{ op.icon ? '' : op.name }}</PanelBtn
				>
			</div>
		</div>
		<div class="specs col-12 row no-wrap justify-between q-gutter-x-lg">
			<PanelBtn
				v-for="spec in numbers.slice(9)"
				:key="spec"
				:value="spec"
				@click="(ch: string) => emit('enterChar', ch)">
				{{ spec }}</PanelBtn
			>
		</div>
		<div class="trigonometry col-12 row no-wrap justify-between q-gutter-x-lg">
			<PanelBtn v-for="trg in trigonometry" :key="trg" :value="trg" @click="(ch: string) => emit('enterChar', ch)">{{
				trg
			}}</PanelBtn>
		</div>
	</div>
</template>

<script setup lang="ts">
import PanelBtn from '@/components/UI/PanelBtn.vue';
import { fasSquareRootVariable, fasAngleUp } from '@quasar/extras/fontawesome-v6';
import { outlinedBackspace } from '@quasar/extras/material-icons-outlined';

const emit = defineEmits<{
	enterChar: [ch: string];
}>();

const actions = ['AC', 'bs', 'e'];
const operators = [
	{ name: 'sqrt', icon: fasSquareRootVariable },
	{ name: '^', icon: fasAngleUp },
	{ name: 'log' },
	{ name: 'exp' },
];
const numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '(', ')'];
const trigonometry = ['sin', 'cos', 'tan', '='];
</script>

<style lang="scss">
.body--dark {
	.bg-operators {
		background-color: $blue-grey-8 !important;
	}
}
.bg-actions {
	background-color: rgba(104, 94, 190, 0.3) !important;
}
.bg-operators {
	background-color: $blue-grey-2 !important;
}
.operators button,
.actions button {
	.q-icon {
		font-size: 1em !important;
	}
}
</style>
