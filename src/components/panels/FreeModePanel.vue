<template>
	<div class="panel row wrap justify-between items-stretch q-pb-sm">
		<div class="actions col-grow row no-wrap q-gutter-x-md justify-between">
			<PanelBtn v-for="action in actions" :key="action" :value="action" @btnClick="enterCharacter" color="actions">{{
				action
			}}</PanelBtn>
		</div>
	</div>
</template>

<script setup lang="ts">
import PanelBtn from '@/components/UI/PanelBtn.vue';

const emit = defineEmits<{
	(e: 'enterCharacter', character: string): void
}>();

const actions = ['AC', '+/-', '%', '='];

const enterCharacter = (ch: string) => emit('enterCharacter', ch);
</script>

<style lang="scss">
.operators {
	@media(max-width: $breakpoint-sm) {
		padding-left: 0 !important;
		padding-right: 0 !important;
	}
}
.bg-actions {
	background-color: rgba(104, 94, 190, 0.3) !important;
}
</style>