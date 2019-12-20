<template>
  <div id="app">
    <b-container fluid class="navHeader">
      <app-header></app-header>
    </b-container>
        <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"
export default {
  components: {
    AppHeader: AppHeader
  }
}
</script>


<style scoped>

.container-fluid{
  padding-left: 0;
  padding-right: 0;
}


</style>
