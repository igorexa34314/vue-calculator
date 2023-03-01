<template>
	<div class="panel row wrap justify-between items-stretch q-pb-sm">
		<div class="col-9 column q-px-sm justify-between q-col-gutter-y-lg">
			<div class="actions col-grow row no-wrap q-gutter-x-md justify-between">
				<calc-btn v-for="action in actions" :key="action" :value="action" @btnClick="enterCharacter" color="actions">{{
					action }}</calc-btn>
			</div>
			<div class="numbers col-grow row wrap items-start justify-between q-gutter-x-md q-gutter-y-lg">
				<calc-btn v-for="num in numbers" :key="num" :value="num"
					v-on="!isNaN(+num) || num === '.' ? { btnClick: enterCharacter } : {}">{{ num }}</calc-btn>
			</div>
		</div>
		<div class="operators col-3 column justify-between q-px-sm q-gutter-y-md items-center">
			<calc-btn v-for="op in operators" :key="op" :value="op" @btnClick="enterCharacter" color="operators">{{
				op
			}}</calc-btn>
		</div>
	</div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
	(e: 'enterCharacter', character: string): void
}>();

const actions = ['AC', '+/-', '%'];
const operators = ['×', '÷', '-', '+', '='];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '00'];

const enterCharacter = (ch: string) => emit('enterCharacter', ch);
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