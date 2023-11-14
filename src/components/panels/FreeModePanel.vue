<template>
	<v-row class="panel pb-3" justify="space-between" align="stretch">
		<v-col class="actions">
			<PanelBtn v-for="action in actions" :key="action" :value="action" @btnClick="enterCharacter" color="actions">{{
				action
			}}</PanelBtn>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import PanelBtn from '@/components/UI/PanelBtn.vue';

const emit = defineEmits<{
	enterCharacter: [character: string]
}>();

const actions = ['AC', '+/-', '%', '='];

const enterCharacter = (ch: string) => emit('enterCharacter', ch);
</script>