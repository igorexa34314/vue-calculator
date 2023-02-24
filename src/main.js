import { createApp } from 'vue';
import App from '@/App.vue';
// import router from '@/router';
import store from '@/store';

import components from '@/components/UI';
import { Quasar } from 'quasar';
import quasarUserOptions from '@/quasar-user-options';

const app = createApp(App);
app.use(Quasar, quasarUserOptions);

components.forEach(component => {
	app.component(component.name, component);
});
// app.use(router);
app.use(store).mount('#app');
