<template>
	<v-snackbar v-model="showSb"
		:color="sbState.type === 'success' ? 'green-darken-3' : sbState.type === 'error' ? 'red-darken-4' : 'orange-darken-4'"
		:timeout="sbState.timeout" location="top" offset="-100" variant="elevated" elevation="3"
		transition="slide-y-transition">
		<v-icon :icon="sbState.type === 'success' ? mdiCheckCircle : mdiAlert" />
		<p class="px-2 font-weight-medium">{{ sbState.message }}</p>

		<template #actions>
			<v-btn variant="text" color="white" @click="showSb = false">
				<v-icon :icon="mdiClose" />
			</v-btn>
		</template>
	</v-snackbar>
</template>

<script setup lang="ts">
import { mdiAlert, mdiCheckCircle, mdiClose } from '@mdi/js';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useSnackbarStore } from '@/stores/snackbar';

const sbStore = useSnackbarStore();
const { snackbarState: sbState } = storeToRefs(sbStore);

const showSb = ref(false);

sbStore.$onAction(({ name, after }) => {
	after(() => {
		if (name === 'notify') {
			showSb.value = true;
		}
	})
});
</script>
