<template>
<div id="app">
     <navbar></navbar>
     <router-view></router-view>
     <app-footer v-if="['home'].indexOf($route.name)"></app-footer>
</div>
</template>

<script>
import navbar from "./components/Header.vue"
import appFooter from "./components/footer.vue"
export default {
     components: {
          navbar,
          appFooter
     }
}
</script>

<style scoped>
.container-fluid {
     padding-left: 0;
     padding-right: 0;
}
</style>
