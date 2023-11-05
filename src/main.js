import { createApp } from 'vue'
import App from './App.vue'
import store from './Store/index';
import router from './router/router';

import { defineRule, configure } from 'vee-validate';
import { required } from '@vee-validate/rules';
import { Field, Form, ErrorMessage } from 'vee-validate';

configure({
    generateMessage: (context) => context.message,
});
defineRule('required', required);

const app = createApp(App);
app.use(store);
app.use(router);
// Register global components
app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');

