import Vue from "vue";
import App from "@/App.vue";
import App2 from "@/views/App2.vue";

const Components = {
    App,
    App2
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
