<template>
    <div>
        <form>
            <input-field
                name="name"
                label="氏名"
                placeholder="山田太郎"
                @update:field="form.name = $event"
            ></input-field>
            <input-field
                name="email"
                label="メールアドレス"
                placeholder="test@test.com"
                @update:field="form.email = $event"
            ></input-field>
            <input-field
                name="company"
                label="会社名"
                placeholder="株式会社ソニック"
                @update:field="form.company = $event"
            ></input-field>
            <input-field
                name="birthday"
                label="生年月日"
                placeholder="2000/01/01"
                @update:field="form.birthday = $event"
            ></input-field>
            <div>
                <button>キャンセル</button>
                <button>新規登録</button>
            </div>
        </form>
        <!-- <p>{{ form.name }}</p>
        <p>{{ form.email }}</p>
        <p>{{ form.company }}</p>
        <p>{{ form.birthday }}</p> -->

        <!-- axiosでDBからとってきたデータを表示 -->
        <div v-for="user in users" :key="user.id">
            <p>{{ user.name }}</p>
        </div>
    </div>
</template>

<script>
import InputField from "../js/components/InputField.vue";
export default {
    name: "ContactsCreate",
    data() {
        return {
            form: {
                name: "",
                email: "",
                company: "",
                birthday: ""
            },
            users: ""
        };
    },
    components: {
        InputField
    },
    mounted() {
        // axiosでDBからデータをとってきた
        axios.get("/customers").then(response => (this.users = response.data));
    }
};
</script>
