<template>
    <div>
        <router-link to="/contacts/create">
            <p>新規登録</p>
        </router-link>
        <contacts-create></contacts-create>
        <hr />
        <example-component></example-component>
    </div>
</template>

<script>
import ContactsCreate from "../../views/ContactsCreate.vue";
import ExampleComponent from "./ExampleComponent.vue";

export default {
    components: {
        ContactsCreate,
        ExampleComponent
    }
};
</script>
