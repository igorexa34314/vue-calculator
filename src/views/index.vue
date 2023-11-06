<template>
	<Sidebar
		:historyData="historyStore.problemItems"
		v-model:drawer="drawer"
		@deleteItem="deleteExpression"
		@runItem="showExpression" />
	<div class="calculator">
		<div class="calculator__container container">
			<div class="calculator__header row wrap items-center justify-center q-gutter-y-md">
				<n-grid cols="5">
					<n-gi span="4" class="theme__toggle">
						<DarkModeToggle />
					</n-gi>
					<n-gi span="1" class="history__btn col-grow row inline justify-end">
						<n-button dense size="large" flat @click="drawer = !drawer" text-color="icons" circle>
							<template #icon>
								<n-icon :component="UpdateFilled" />
							</template>
						</n-button>
					</n-gi>
				</n-grid>

				<n-tabs
					dense
					v-model:value="activeTab"
					class="bg-none text-accent shadow-none"
					content-class="calculator-tabs"
					shrink
					@before-leave="handleTabChange">
					<n-tab
						v-for="tab in tabs"
						:key="tab.name.toString()"
						:name="tab.name.toString()"
						class=""
						content-class="calculator-tab">
						{{ tab.label }}
					</n-tab>
				</n-tabs>
			</div>
			<CalculatorDisplay
				class="calculator__display"
				:class="{ 'q-mb-lg': !!tabs.find(t => t.name === activeTab)?.free }"
				v-model="expression"
				:free-mode="!!tabs.find(t => t.name === activeTab)?.free" />
			<div class="calculator__body">
				<div>
					<router-view #default="{ Component }">
						<transition mode="out-in">
							<keep-alive include="base">
								<component :is="Component" class="calculator__panel" @enterChar="applyCharToExp" />
							</keep-alive>
						</transition>
					</router-view>
				</div>
				<div class="calculator__footer">
					<div class="calculator__decor"><span></span></div>
				</div>
				<DecorEllipse class="panel-decor" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import DarkModeToggle from '@/components/app/DarkModeToggle.vue';
import { NTabs, NTab, NButton, NGrid, NGi, NIcon } from 'naive-ui';
import DecorEllipse from '@/components/UI/DecorEllipse.vue';
import CalculatorDisplay from '@/components/app/CalculatorDisplay.vue';
import Sidebar from '@/components/history/Sidebar.vue';
import { UpdateFilled } from '@vicons/material';
import { ref } from 'vue';
import { useHistoryStore } from '@/stores/history';
import { useExpression } from '@/composables/useExpression';
import { useRoute, useRouter, definePage } from 'vue-router/auto';
import { RouteNamedMap } from 'vue-router/auto/routes';

definePage({ redirect: { name: '//base' } });

const route = useRoute();
const router = useRouter();
const historyStore = useHistoryStore();

const drawer = ref(false);

const darkMode = ref(false);

const tabs: { name: keyof RouteNamedMap; label: string; free?: boolean }[] = [
	{ name: '//base', label: 'Base' },
	{ name: '//advanced', label: 'Advanced' },
	{ name: '//freemode', label: 'Free Mode', free: true },
];
const activeTab = ref(route.name ?? tabs[0].name.toString());

const handleTabChange = (activeName: keyof RouteNamedMap) => {
	router.push({ name: activeName });
	return true;
};

const { expression, applyCharToExp, showExpression, deleteExpression } = useExpression();
</script>

<style lang="scss">
.body--dark {
	.calculator {
		background: linear-gradient(166.34deg, #373737 0%, #252628 22.9%, #000309 100%);
		box-shadow: 0px 4px 4px rgba(144, 132, 132, 0.241);
		&__decor span {
			background: #3d76ab;
		}
	}
	.text-icons {
		color: #fbfbfb !important;
	}
	.text-accent {
		color: #fbfbfb !important;
	}
	.panel-decor {
		transform: translateX(-70%);
		opacity: 0.75;
		background: linear-gradient(166.34deg, #373737 0%, #252628 22.9%, #000309 100%);
	}
}
.calculator {
	position: relative;
	overflow: hidden;
	background: linear-gradient(166.34deg, #fefefe 0%, #f9f9f9 12.84%, #f3f3f3 32.53%, #e5e5e5 100%);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 1.5em;
	&__container {
		margin: 0 auto;
		max-width: 425px;
	}
	&__header {
		padding-top: 0.4em !important;
	}
	&__display {
		padding: 1.2em;
		@media (max-width: 420px) {
			padding: 0.9em;
		}
	}
	&__body {
		overflow: hidden;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
		filter: drop-shadow(0px -5px 70px rgba(0, 0, 0, 0.1));
		border-radius: 1em;
	}
	&__panel,
	&__footer {
		position: relative;
		z-index: 50;
	}
	&__footer {
		padding-top: 0.2em;
		@media (max-width: 380px) {
			padding-top: 0;
		}
	}
	&-tab > * {
		font-size: 0.75em !important;
	}
	&__decor {
		position: relative;
		z-index: 50;
		margin-bottom: -15px;
		padding: 1em 15px 0px 15px !important;
		display: flex;
		justify-content: center;
		align-items: center;
		@media (max-width: 480px) {
			padding: 0.5em 15px 0px 15px !important;
		}
		@media (max-width: 380px) {
			padding: 0.3em 10px 0px 10px !important;
			margin-bottom: -8px;
		}
		span {
			display: inline-block;
			width: 100%;
			max-width: 175px;
			height: 0.2em;
			background-color: #6396c5;
			border-radius: 1%;
			@media (max-width: 480px) {
				height: 0.15em;
			}
		}
	}
}
.v-enter-active,
.v-leave-active {
	transition: all 0.3s ease 0.2s;
}

.v-enter-from,
.v-leave-to {
	transform: translate(-100%);
	opacity: 0;
}
.theme__toggle {
	display: flex;
	justify-content: center;
}
.container {
	& > div {
		padding: 1.2em;
		@media (max-width: 420px) {
			padding: 0.9em;
		}
		@media (max-width: 380px) {
			padding: 0.75em;
		}
	}
}
.text-icons {
	color: rgba(55, 55, 55, 0.8) !important;
}
.panel-decor {
	left: 50%;
	width: 250%;
	height: 80%;
	background: linear-gradient(244.38deg, #9ee8ff 8.14%, #5aceff 27.9%, #79afff 56.94%, #2d5fde 84.11%);
	filter: blur(8.5em);
	transform: translate(-50%, 0%) rotate(-15deg);
	bottom: 0;
}
</style>
