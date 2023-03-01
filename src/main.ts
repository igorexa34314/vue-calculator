import { createApp } from 'vue';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import UI from '@/components/UI';
import { Quasar } from 'quasar';
import quasarUserOptions from '@/quasar-user-options';

const app = createApp(App);
UI.forEach(comp => {
	app.component(comp.name, comp.component);
});
app.use(Quasar, quasarUserOptions);

app.use(createPinia()).mount('#app');
