import { createApp } from 'vue';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import quasarUserOptions from '@/plugins/quasar-user-options';
import router from '@/router';

const app = createApp(App);

app.use(Quasar, quasarUserOptions).use(createPinia()).use(router);

app.mount('#app');
