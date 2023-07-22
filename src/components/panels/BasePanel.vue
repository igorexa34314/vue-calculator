<template>
	<div class="panel row wrap justify-between items-stretch q-pb-sm">
		<div class="col-9 column q-pr-sm justify-between q-col-gutter-y-lg">
			<div class="actions col-grow row no-wrap q-gutter-x-md justify-between">
				<PanelBtn v-for="action in actions" :key="action" :value="action" @btnClick="enterCharacter" color="actions">{{
					action }}</PanelBtn>
			</div>
			<div class="numbers col-grow row wrap items-start justify-between q-gutter-x-md q-gutter-y-lg">
				<PanelBtn v-for="num in numbers" :key="num" :value="num"
					v-on="!isNaN(+num) || num === '.' ? { btnClick: enterCharacter } : {}">{{ num }}</PanelBtn>
			</div>
		</div>
		<div class="operators col-3 column justify-between q-pl-md q-gutter-y-md items-center">
			<PanelBtn v-for="(op, index) in operators" :key="op" :value="op" @btnClick="enterCharacter"
				:class="{ 'q-mb-xs': index === 0 }" color="operators">{{
					op
				}}</PanelBtn>
		</div>
	</div>
</template>

<script setup lang="ts">
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
</style>