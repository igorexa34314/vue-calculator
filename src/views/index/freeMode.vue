<template>
	<div class="panel row wrap justify-between items-stretch q-pb-sm">
		<div class="actions col-grow row no-wrap q-gutter-x-md justify-between">
			<PanelBtn
				v-for="action in actions"
				:key="action"
				:value="action"
				@click="(ch: string) => emit('enterChar', ch)"
				color="actions"
				>{{ action }}</PanelBtn
			>
		</div>
	</div>
</template>

<script setup lang="ts">
import PanelBtn from '@/components/UI/PanelBtn.vue';

const emit = defineEmits<{
	enterChar: [ch: string];
}>();

const actions = ['AC', '+/-', '%', '='];
</script>

<style lang="scss">
.bg-actions {
	background-color: rgba(104, 94, 190, 0.3) !important;
}
</style>
