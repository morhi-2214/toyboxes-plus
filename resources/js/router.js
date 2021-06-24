import Vue from "vue";
import VueRouter from "vue-router";
import ContactsCreate from "../views/ContactsCreate";

Vue.use(VueRouter);

export default new VueRouter({
    mode: history,
    routes: [
        {
            path: "/contacts/create",
            name: "ContactsCreate",
            component: ContactsCreate
        }
    ]
});
