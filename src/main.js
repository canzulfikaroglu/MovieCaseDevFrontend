import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import PrimeVue from 'primevue/config'
import { createAuth0 } from '@auth0/auth0-vue'
import Aura from '@primeuix/themes/aura';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import Card from 'primevue/card'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
            options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('Textarea', Textarea);
app.component('Button', Button);
app.component('Card', Card)
app.use(router)
app.use(
  createAuth0({
    domain: "dev-l82siv7xnto4nbvh.us.auth0.com",
    clientId: "m2HEQzObhcaGHOGr8kRWMcv3MCzWIva2",
    authorizationParams: {
      redirect_uri: window.location.origin,     
       audience: 'https://movie-api.can',
          scope: 'openid profile email'
    }
  })
);
app.mount('#app')