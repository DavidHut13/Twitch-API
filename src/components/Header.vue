<template>
<div>
    <b-navbar toggleable="lg" type="light">
        <router-link to="/" class="logo"><i class=" fas fa-users fa-lg" ></i> Streamer </router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <router-link to="/"><a class="nav-link">Home</a></router-link>
                <router-link to="/browse"><a class="nav-link">Browse</a></router-link>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>
.logo {
    color: rgb(44, 44, 44);
    text-decoration: none;
}

.logo:hover {
    color: rgb(153, 112, 247);
}

.navbar {
    -webkit-box-shadow: 0px 3px 17px -12px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 3px 17px -12px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 3px 17px -12px rgba(0, 0, 0, 0.5);
}

.navbar-light .navbar-brand,
.navbar-light .navbar-nav .nav-link {
    color: rgb(44, 44, 44);
}

.nav-link {
    border-bottom: 3px solid white;
    display: inline-block;
}

.nav-link:hover {
    color: rgb(153, 112, 247);
    border-bottom: 3px solid rgb(153, 112, 247);
}
</style>
