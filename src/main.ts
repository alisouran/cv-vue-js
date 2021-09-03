import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './assets/style.scss';


createApp(App)
  .use(router)
  .mount('#app');
