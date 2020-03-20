<template>
<div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <app-footer></app-footer>
</div>
</template>

<script>
import navbar from "./components/Header.vue"
import appFooter from "./components/footer.vue"
export default {
    components: {
        navbar,
        appFooter
    },
}
</script>

<style scoped>

</style>
