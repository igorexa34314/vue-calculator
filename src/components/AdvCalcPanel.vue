<template>
	<div class="panel row wrap justify-between items-center q-col-gutter-y-lg q-pb-sm">
		<div class="col-9 column q-pr-md q-pl-xs justify-between q-col-gutter-y-lg">
			<div class="actions col-grow row no-wrap q-gutter-x-md justify-between">
				<calc-btn v-for="action in actions" :key="action" :value="action" @btnClick="enterCharacter" color="actions"
					:icon="action === 'bs' ? 'o_backspace' : undefined">{{ action !== 'bs' ? action : ''}}</calc-btn>
			</div>
			<div class="numbers col-grow row wrap items-start justify-between q-gutter-x-md q-gutter-y-lg">
				<calc-btn v-for="num in numbers.slice(0, 9)" :key="num" :value="num"
					v-on="!isNaN(num) || num === '.' ? { btnClick: enterCharacter } : {}">{{ num }}</calc-btn>
			</div>
		</div>
		<div class="operators col-3 column q-px-sm q-gutter-y-lg items-center">
			<calc-btn v-for="op in operators" :key="op.name" :value="op.name" @btnClick="enterCharacter" color="operators"
				:icon="op.icon || undefined">{{ op.icon ? '' : op.name }}</calc-btn>
		</div>
		<div class="specs col-12 self-stretch row no-wrap justify-between q-gutter-x-lg">
			<calc-btn v-for="spec in numbers.slice(9)" :key="spec" :value="spec" @btnClick="enterCharacter">{{
				spec
			}}</calc-btn>
		</div>
		<div class="trigonometry col-12 self-stretch row no-wrap justify-between q-gutter-x-lg">
			<calc-btn v-for="trg in trigonometry" :key="trg" :value="trg" @btnClick="enterCharacter">{{ trg }}</calc-btn>
		</div>
	</div>
</template>

<script setup>
const emit = defineEmits(['enterCharacter']);

const actions = ['AC', 'bs', 'e'];
const operators = [
	{ name: 'sqrt', icon: 'fa-solid fa-square-root-variable' },
	{ name: '^', icon: 'fa-solid fa-angle-up' },
	{ name: 'log', icon: '' },
	{ name: 'exp', icon: '' },
];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '(', ')'];
const trigonometry = ['sin', 'cos', 'tan', '='];

const enterCharacter = character => emit('enterCharacter', character);
</script>

<style lang="scss">
.body--dark {
	.bg-operators {
		background-color: $blue-grey-8 !important;
	}
}
.panel {
	.col-9 {
		@media(max-width: $breakpoint-sm) {
			padding-right: 0.5em !important;
		}
	}
}
// .numbers {}
// .actions {}
// .specs {}
// .trigonometry {}
.operators {
	@media(max-width: $breakpoint-sm) {
		padding-left: 0 !important;
		padding-right: 0 !important;
	}
}
.bg-actions {
	background-color: rgba(104, 94, 190, 0.3) !important;
}
.bg-operators {
	background-color: $blue-grey-2 !important;
}
</style>