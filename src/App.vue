<template>
  <div id="app">
    <b-container fluid class="navHeader">
      <navbar></navbar>
    </b-container>
        <router-view></router-view>
  </div>
</template>

<script>
import navbar from "./components/Header.vue"
export default {
  components: {
    navbar
  }
}
</script>


<style scoped>

.container-fluid{
  padding-left: 0;
  padding-right: 0;
}


</style>
