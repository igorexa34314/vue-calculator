<template>
	<div class="panel row wrap justify-between items-stretch q-pb-sm">
		<div class="actions col-grow row no-wrap q-gutter-x-md justify-between">
			<calc-btn v-for="action in actions" :key="action" :value="action" @btnClick="enterCharacter" color="actions">{{
				action
			}}</calc-btn>
		</div>
	</div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
	(e: 'enterCharacter', character: string): void
}>();

const actions = ['AC', '+/-', '%', '='];

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