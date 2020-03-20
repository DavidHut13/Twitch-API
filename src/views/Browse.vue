<template>
<div>
     <b-container class="browseWrapper" fluid>
          <b-row>
               <b-col cols="12" class="mt-5 text-center">
                    <h2 class="catagoryHeader">Top Games</h2>
                    <hr class="underline">
               </b-col>
               <b-col cols="12">
                    <top-games></top-games>
               </b-col>
               <b-col cols="12" class="mt-5 text-center">
                    <h2 class="catagoryHeader">Top Streamers</h2>
                    <hr class="underline">
               </b-col>
               <b-col cols="12">
                   <top-streams></top-streams>
               </b-col>
          </b-row>
     </b-container>
</div>
</template>

<script>
import axios from 'axios'
import topStreams from '../components/topStreams.vue'
import topGames from '../components/topGames.vue'
export default {
     name: "browse",
     data() {
          return {
        
          };
     },
     methods: {
        
     },
     created() {
     },
     components: {
         topStreams,
         topGames
     }
};
</script>

<style scoped>
.browseWrapper{
      overflow-x: hidden
}
.underline{
     width:25%;
}

.catagoryHeader{
     font-family: 'Roboto Condensed', sans-serif;
}
</style>
