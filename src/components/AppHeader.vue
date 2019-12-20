<template>
    <div>
        <b-navbar toggleable="lg" type="light">
            <b-navbar-brand ><router-link to="/"><i class="fas fa-users fa-lg"></i> Streamer </router-link></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#" right>Home</b-nav-item>
                <b-nav-item href="#" right>Browse</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
name:"AppHeader"
export default {
   
} 
</script>

<style scoped>


.navbar{
  background-color:rgb(96, 73, 150);
  color:white;
}

.navbar-light .navbar-brand, .navbar-light .navbar-nav .nav-link {
    color: white;
}
</style>



