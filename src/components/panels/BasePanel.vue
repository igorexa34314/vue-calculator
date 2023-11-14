<template>
	<v-row class="panel" justify="space-between" align="stretch">
		<v-col cols="9">
			<div class="actions d-flex flex-row flex-nowrap justify-between">
				<PanelBtn v-for="action in actions" :key="action" :value="action" @btnClick="enterCharacter" color="actions">{{
					action }}</PanelBtn>
			</div>
			<div class="numbers d-flex flex-wrap align-start justify-between">
				<PanelBtn v-for="num in numbers" :key="num" :value="num"
					v-on="!isNaN(+num) || num === '.' ? { btnClick: enterCharacter } : {}">{{ num }}</PanelBtn>
			</div>
		</v-col>
		<v-col cols="3" class="operators d-flex flex-column justify-between items-center">
			<PanelBtn v-for="(op, index) in operators" :key="op" :value="op" @btnClick="enterCharacter"
				:class="{ 'q-mb-xs': index === 0 }" color="operators">{{
					op
				}}</PanelBtn>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import PanelBtn from '@/components/UI/PanelBtn.vue';

const emit = defineEmits<{
	enterCharacter: [character: string]
}>();

const actions = ['AC', '+/-', '%'];
const operators = ['×', '÷', '-', '+', '='];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '00'];

const enterCharacter = (ch: string) => emit('enterCharacter', ch);
</script>