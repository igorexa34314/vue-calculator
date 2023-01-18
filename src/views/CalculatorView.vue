<template>
	<HistorySidebar :historyData="getProblemItems" v-model:drawer="drawer" @deleteItem="deleteExpr"
		@runItem="showExpr" />
	<div class="calculator">
		<div class="calculator__container container">
			<div class="calculator__header row wrap items-center justify-center q-gutter-y-md">
				<div class="theme__toggle col-8 row inline justify-end">
					<q-toggle v-model="darkMode" size="110px" keep-color checked-icon="o_dark_mode" color="blue"
						unchecked-icon="o_light_mode" />
				</div>
				<div class="history__btn col-grow row inline justify-end"><q-btn dense size="30px" rounded flat
						@click="drawer = !drawer" text-color="icons" icon="update"></q-btn>
				</div>
				<q-tabs dense v-model="activeTab" class="bg-none text-accent shadow-none" content-class="calculator-tabs"
					shrink>
					<q-tab v-for="tab in tabs" :key="tab.name" v-bind="tab" class="" content-class="calculator-tab" />
				</q-tabs>
			</div>
			<CalculatorDisplay class="calculator__display" :class="activeTab === 'freeMode' ? 'q-mb-lg' : ''"
				v-model="expr" :free-mode="activeTab === 'freeMode' ? true : false" />
			<div class="calculator__body">
				<q-tab-panels v-model="activeTab" class="q-pa-none bg-transparent" animated swipeable>
					<q-tab-panel :name="tabs[0].name" class="q-pa-none">
						<BaseCalcPanel class="calculator__panel" @enterCharacter="enterCharacter" />
					</q-tab-panel>
					<q-tab-panel :name="tabs[1].name" class="q-pa-none">
						<AdvCalcPanel class="calculator__panel" @enterCharacter="enterCharacter" />
					</q-tab-panel>
					<q-tab-panel :name="tabs[2].name" class="q-pa-none">
						<FreeModeCalcPanel class="calculator__panel" @enterCharacter="enterCharacter" />
					</q-tab-panel>
				</q-tab-panels>
				<div class="calculator__footer">
					<div class="calculator__decor"><span></span></div>
				</div>
				<decor-ellipse class="panel-decor" />
			</div>
		</div>
	</div>
</template>

<script>
import BaseCalcPanel from '@/components/BaseCalcPanel.vue';
import AdvCalcPanel from '@/components/AdvCalcPanel.vue';
import FreeModeCalcPanel from '@/components/FreeModeCalcPanel.vue';
import CalculatorDisplay from '@/components/CalculatorDisplay.vue';
import HistorySidebar from '@/components/HistorySidebar.vue';

import { ref, computed, watch } from 'vue';

import { useStore } from 'vuex';

import { useExpression } from '@/hooks/useExpression';
import { useDarkMode } from '@/hooks/useDarkMode';

export default {
	components: {
		HistorySidebar, BaseCalcPanel, AdvCalcPanel, FreeModeCalcPanel, CalculatorDisplay
	},
	setup() {
		const store = useStore();

		const getProblemItems = computed(() => store.getters.getProblemItems);

		const drawer = ref(false);

		const { darkMode } = useDarkMode();

		const tabs = [
			{ name: 'base', label: 'Base' },
			{ name: 'advanced', label: 'Advanced' },
			{ name: 'freeMode', label: 'Free Mode' },
		];

		const activeTab = ref('');

		if (localStorage.getItem('activeTab')) {
			activeTab.value = JSON.parse(localStorage.getItem('activeTab'));
		}
		else {
			activeTab.value = tabs[0].name;
		}

		watch(activeTab, newValue => localStorage.setItem('activeTab', JSON.stringify(newValue)));

		const { expr, enterCharacter, showExpr, deleteExpr } = useExpression();

		return {
			darkMode,
			getProblemItems,
			drawer,
			tabs, activeTab,
			expr, enterCharacter,
			showExpr, deleteExpr,
		}
	},
}
</script>

<style lang="scss">
.body--dark {
	.calculator {
		background: linear-gradient(166.34deg, #373737 0%, #252628 22.9%, #000309 100%);
		box-shadow: 0px 4px 4px rgba(144, 132, 132, 0.241);
		&__decor span {
			background: #3D76AB;
		}
	}
	.text-icons {
		color: #FBFBFB !important;
	}
	.text-accent {
		color: #FBFBFB !important;
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
	// &-tabs {}
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
// .theme__toggle {}
</style>