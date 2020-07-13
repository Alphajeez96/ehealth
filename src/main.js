import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import './registerServiceWorker'

Vue.use(VueAxios, axios);

const base = axios.create({
    baseURL: "https://ehealth-alpha.firebaseio.com/users",
});

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");