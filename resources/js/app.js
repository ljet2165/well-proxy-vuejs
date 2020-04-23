require("./bootstrap");

import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import routes from "./routes";



// Vue.use(CarouselPlugin)
import BootstrapVue from "bootstrap-vue"; //Importing
import ToggleButton from 'vue-js-toggle-button'

Vue.use(ToggleButton)
Vue.use(BootstrapVue); // Telling Vue to use this in whole application
Vue.use(Vuetify);
Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    router: new VueRouter(routes)
});
