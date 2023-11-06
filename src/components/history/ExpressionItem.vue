<template>
	<n-list-item class="expr-item q-pa-sm">
		<n-thing class="q-pa-md" @click="emit('runItem', expression as T)">
			<template #header>
				<div lines="2" class="expr-item__problem q-mb-xs">{{ (expression as T).problem + ' = ' }}</div>
			</template>
			<template #description>
				<div lines="1" class="expr-item__result">{{ (expression as T).result }}</div>
			</template>
		</n-thing>
		<template #suffix>
			<div class="di" style="display: flex; gap: 0.75em">
				<n-button flat rounded text-color="icons" padding="sm" dense @click="copyProblem(expression as T)">
					<template #icon>
						<n-icon :component="ContentCopyOutlined" />
					</template>
				</n-button>
				<!-- <n-tooltip anchor="bottom middle" self="bottom middle" no-parent-event ref="copyMessage"
				class="text-caption">Copied to clipboard</n-tooltip> -->

				<n-button flat rounded text-color="icons" padding="sm" dense @click="emit('deleteItem', expression as T)">
					<template #icon>
						<n-icon :component="DeleteFilled" />
					</template>
				</n-button>
			</div>
		</template>
	</n-list-item>
</template>

<script setup lang="ts" generic="T extends Expression">
import { NListItem, NButton, NThing, NIcon, ListProps, NH3, ThingProps } from 'naive-ui';
import { computed } from 'vue';
import { DeleteFilled, ContentCopyOutlined } from '@vicons/material';
import { Expression } from '@/stores/history';
import { useDarkModeStore } from '@/stores/darkMode';

const { expression } = defineProps<{
	expression: T;
}>();

const emit = defineEmits<{
	runItem: [exp: T];
	deleteItem: [exp: T];
}>();

const copyProblem = async (exp: T) => {
	try {
		await navigator.clipboard.writeText(exp.problem + ' = ' + exp.result);
		// copyMessage.value?.show();
		// setTimeout(() => copyMessage.value?.hide(), 2000);
	} catch (err) {
		alert('Failed to copy');
	}
};

const darkModeStore = useDarkModeStore();

const ListThemeOverrides = computed(
	() =>
		({
			...(darkModeStore.darkMode
				? { color: 'rgba(5, 5, 5, 0.3)', textColor: '#FBFBFB' }
				: { color: 'rgba(255, 255, 255, 0.3)', textColor: '#373737' }),
		}) as NonNullable<ListProps['themeOverrides']>
);
</script>

<style lang="scss" scoped>
.body--dark {
	.expr-item {
		&__problem {
			color: rgba(251, 251, 251, 0.5) !important;
		}
		&__result {
			color: #fbfbfb !important;
		}
	}
}
.expr {
	&-item {
		&__problem {
			font-size: 0.7em;
			color: rgba(55, 55, 55, 0.5) !important;
			@media (max-width: 380px) {
				font-size: 0.6em;
			}
		}
		&__result {
			line-height: 1.5 !important;
			@media (max-width: 380px) {
				font-size: 0.85em;
			}
		}
	}
}
</style>
