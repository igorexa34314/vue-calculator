<template>
	<HistorySidebar :historyData="getProblemItems" v-model:drawer="drawer" @deleteItem="deleteExpression"
		@runItem="showExpression" />
	<div class="calculator">
		<div class="calculator__container container">
			<div class="calculator__header row wrap items-center justify-center q-gutter-y-md">
				<div class="theme__toggle col-8 row inline justify-end">
					<v-switch v-model="darkMode" :true-icon="mdiWeatherNight" color="blue" :false-icon="mdiWeatherSunny"
						inset />
				</div>
				<div class="history__btn col-grow row inline justify-end">
					<v-btn dense size="large" @click="drawer = !drawer" color="icons" :icon="mdiUpdate" />
				</div>
				<v-tabs v-model="activeTab" class="calculator-tabs">
					<v-tab v-for="tab in tabs" :key="tab.value" :value="tab.value" :text="tab.label" class="calculator-tab" />
				</v-tabs>
			</div>
			<CalculatorDisplay class="calculator__display" :class="activeTab === 'freeMode' ? '' : ''" v-model="expression"
				:free-mode="activeTab === 'freeMode'" />
			<div class="calculator__body">
				<v-window v-model="activeTab" class="q-pa-none bg-transparent" animated swipeable>
					<v-window-item v-for="tab in tabs" :key="tab.value" :value="tab.value" class="">
						<component :is="tab.component" class="calculator__panel" @enterCharacter="applyCharToExp" />
					</v-window-item>
				</v-window>
				<div class="calculator__footer">
					<div class="calculator__decor"><span></span></div>
				</div>
				<DecorEllipse class="panel-decor" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import DecorEllipse from '@/components/UI/DecorEllipse.vue';
import BasePanel from '@/components/panels/BasePanel.vue';
import AdvancedPanel from '@/components/panels/AdvancedPanel.vue';
import FreeModePanel from '@/components/panels/FreeModePanel.vue';
import CalculatorDisplay from '@/components/CalculatorDisplay.vue';
import HistorySidebar from '@/components/history/HistorySidebar.vue';
import { mdiUpdate, mdiWeatherSunny, mdiWeatherNight } from '@mdi/js';
import { ref, computed } from 'vue';
import { useHistoryStore } from '@/stores/history';
import { useExpression } from '@/composables/useExpression';
import { useDarkMode } from '@/composables/useDarkMode';
import { useTabs } from '@/composables/useTabs';
import { Tabs } from '@/types/Tabs';

const historyStore = useHistoryStore();

const getProblemItems = computed(() => historyStore.problemItems);

const drawer = ref(false);

const { darkMode } = useDarkMode();

const tabs = [
	{ value: Tabs.BASE, label: 'Base', component: BasePanel },
	{ value: Tabs.ADVANCED, label: 'Advanced', component: AdvancedPanel },
	{ value: Tabs.FREEMODE, label: 'Free Mode', component: FreeModePanel },
];

const { activeTab } = useTabs(tabs[0].value);

const { expression, applyCharToExp, showExpression, deleteExpression } = useExpression();
</script>

<style lang="scss">
.calculator {
	position: relative;
	overflow: hidden;
	@media(max-width: 670px) {
		transform: scale(0.8);
	}
	background: linear-gradient(166.34deg, #FEFEFE 0%, #F9F9F9 12.84%, #F3F3F3 32.53%, #E5E5E5 100%);
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
		@media(max-width: 420px) {
			padding: 0.9em;
		}
	}
	&__body {
		overflow: hidden;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
		filter: drop-shadow(0px -5px 70px rgba(0, 0, 0, 0.1));
		border-radius: 1em;
	}
	&__panel, &__footer {
		position: relative;
		z-index: 50;
	}
	&__footer {
		padding-top: 0.2em;
		@media(max-width: 380px) {
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
		@media(max-width: 480px) {
			padding: 0.5em 15px 0px 15px !important;
		}
		@media(max-width: 380px) {
			padding: 0.3em 10px 0px 10px !important;
			margin-bottom: -8px;
		}
		span {
			display: inline-block;
			width: 100%;
			max-width: 175px;
			height: 0.2em;
			background-color: #6396C5;
			border-radius: 1%;
			@media(max-width: 480px) {
				height: 0.15em;
			}
		}
	}
}
.container {
	& > div {
		padding: 1.2em;
		@media(max-width: 420px) {
			padding: 0.9em;
		}
		@media(max-width: 380px) {
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
	background: linear-gradient(244.38deg, #9EE8FF 8.14%, #5ACEFF 27.9%, #79AFFF 56.94%, #2D5FDE 84.11%);
	filter: blur(8.5em);
	transform: translate(-50%, 0%) rotate(-15deg);
	bottom: 0;
}
</style>