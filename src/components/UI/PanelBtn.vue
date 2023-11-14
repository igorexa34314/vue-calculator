<template>
	<v-btn class="panel-btn" @click="emit('btnClick', value)" color="btn" size="1em" rounded>
		<slot />
	</v-btn>
</template>

<script setup lang="ts">
const props = defineProps<{
	value: string
}>();

const emit = defineEmits<{
	btnClick: [value: typeof props.value]
}>();
</script>