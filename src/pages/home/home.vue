<template>
    <div>
        home

        <button @click="login">login</button>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods: {
            login() {
                this.$router.push('/login');
            }
        }
    }
</script>

<style lang='stylus' scoped>

</style>