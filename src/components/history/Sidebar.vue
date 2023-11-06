<template>
	<n-drawer
		v-model:show="drawer"
		placement="right"
		:width="450"
		:breakpoint="1024"
		overlay
		elevated
		persistent
		:theme-overrides="drawerThemeOverrides">
		<n-drawer-content class="fit" :native-scrollbar="false">
			<ExpressionList
				:items="historyData"
				@deleteItem="item => emit('deleteItem', item as T)"
				@runItem="item => runItem(item as T)" />
		</n-drawer-content>
	</n-drawer>
</template>

<script setup lang="ts" generic="T extends Expression">
import { computed } from 'vue';
import { NDrawer, NDrawerContent, DrawerProps } from 'naive-ui';
import ExpressionList from '@/components/history/ExpressionList.vue';
import { Expression } from '@/stores/history';
import { useDarkModeStore } from '@/stores/darkMode';

const emit = defineEmits<{
	runItem: [exp: T];
	deleteItem: [exp: T];
}>();

const { historyData } = defineProps<{
	historyData: Expression[];
}>();

const drawer = defineModel('drawer', { default: false });

const runItem = (exprItem: T) => {
	emit('runItem', exprItem);
	drawer.value = false;
};

const darkModeStore = useDarkModeStore();

const drawerThemeOverrides = computed(
	() =>
		({
			...(darkModeStore.darkMode ? { color: 'rgba(51, 38, 38, 0.5)' } : { color: '#e5e5e5' }),
		}) as NonNullable<DrawerProps['themeOverrides']>
);
</script>
