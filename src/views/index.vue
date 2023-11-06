<template>
	<Sidebar
		:historyData="historyStore.problemItems"
		v-model:drawer="drawer"
		@deleteItem="deleteExpression"
		@runItem="showExpression" />

	<div class="calculator">
		<div class="calculator__container container">
			<div class="calculator__header row wrap items-center justify-center q-gutter-y-md">
				<div class="theme__toggle col-8 row inline justify-end">
					<q-toggle
						v-model="darkMode"
						size="110px"
						keep-color
						:checked-icon="outlinedDarkMode"
						color="blue"
						:unchecked-icon="outlinedLightMode" />
				</div>
				<div class="history__btn col-grow row inline justify-end">
					<q-btn
						dense
						size="lg"
						flat
						@click="drawer = !drawer"
						text-color="icons"
						:icon="matUpdate"
						rounded></q-btn>
				</div>
				<q-tabs
					dense
					v-model="activeTab"
					class="bg-none shadow-none text-accent"
					content-class="calculator-tabs "
					shrink>
					<q-route-tab
						v-for="tab in tabs"
						:key="tab.name"
						v-bind="tab"
						:to="{ name: tab.name }"
						content-class="calculator-tab" />
				</q-tabs>
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
import DecorEllipse from '@/components/UI/DecorEllipse.vue';
import CalculatorDisplay from '@/components/app/CalculatorDisplay.vue';
import Sidebar from '@/components/app/Sidebar.vue';
import { matUpdate } from '@quasar/extras/material-icons';
import { outlinedLightMode, outlinedDarkMode } from '@quasar/extras/material-icons-outlined';
import { ref } from 'vue';
import { useHistoryStore } from '@/stores/history';
import { useExpression } from '@/composables/useExpression';
import { useDarkModeStore } from '@/stores/darkMode';
import { storeToRefs } from 'pinia';
import { useRoute, definePage } from 'vue-router/auto';
import { RouteNamedMap } from 'vue-router/auto/routes';

definePage({ redirect: { name: '//base' } });

const historyStore = useHistoryStore();
const route = useRoute();

const drawer = ref(false);

const { darkMode } = storeToRefs(useDarkModeStore());

const tabs: { name: keyof RouteNamedMap; label: string; free?: boolean }[] = [
	{ name: '//base', label: 'Base' },
	{ name: '//advanced', label: 'Advanced' },
	{ name: '//freeMode', label: 'Free Mode', free: true },
];

const activeTab = ref(route.name ?? tabs[0].name);

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
	@media (max-width: 670px) {
		transform: scale(0.8);
	}
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
	&-tab > div {
		font-size: 0.75em !important;
	}
	.q-tabs .q-icon {
		display: none !important;
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
.text-accent {
	color: $accent !important;
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
.v-enter-active,
.v-leave-active {
	transition: all 0.3s ease 0.2s;
}

.v-enter-from,
.v-leave-to {
	transform: translate(-100%);
	opacity: 0;
}
</style>
