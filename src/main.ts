
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimVue from 'primevue/config';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/aura-light-green/theme.css';

const app = createApp(App);

app.use(router);
app.use(PrimVue);

app.mount('#app');
