<template>
	<q-layout class="app" view="hHh lpR fFf">
		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.app {
	padding: 15px;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
