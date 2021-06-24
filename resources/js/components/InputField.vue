<template>
    <div>
        <label :for="name">{{ label }}</label>
        <input
            :id="name"
            type="text"
            :placeholder="placeholder"
            v-model="value"
            @input="updateField()"
        />
    </div>
</template>

<script>
export default {
    name: "InputField",
    props: ["name", "label", "placeholder"],
    data() {
        return {
            value: ""
        };
    },
    methods: {
        updateField() {
            this.$emit("update:field", this.value);
        }
    }
};
</script>
