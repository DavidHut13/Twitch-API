<template>
<div>
     <b-container fluid>
          <b-row>
               <b-col cols="12" class="mt-5">
                    <h2>Top Games</h2>
               </b-col>
               <b-col cols="12">
                    <top-games></top-games>
               </b-col>
               <b-col cols="12" class="mt-5">
                    <h2>Top Sreamers</h2>
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

</style>
