import { createApp } from 'vue';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import pinia from '@/plugins/pinia';

const app = createApp(App);

app.use(vuetify).use(pinia);

app.mount('#app');
