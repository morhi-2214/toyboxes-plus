<template>
    <div>
        <router-link to="/contacts/create">
            <p>新規登録</p>
        </router-link>
        <contacts-create></contacts-create>
    </div>
</template>

<script>
import ContactsCreate from "../../views/ContactsCreate.vue";

export default {
    components: {
        ContactsCreate
    }
};
</script>
