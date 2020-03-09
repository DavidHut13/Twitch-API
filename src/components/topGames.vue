<template>
<b-container>
     <b-row>
          <b-col v-if="topGames.length <= 0" cols="12" class="flexCenter loadingStreamers">
               <b-button class="loadingBtn" variant="none" disabled>
                    <b-spinner small type="grow"></b-spinner>
                    Loading...
               </b-button>
          </b-col>
          <b-col else cols="12">
               <carousel :navigationEnabled="true" :paginationEnabled="true" :scrollPerPage="false" :autoplay="false" :perPageCustom="[[960, 8], [720, 5],[350,4]]">
                    <slide v-for="(game,index) in topGames" :key="index">
                         <b-card>
                              <b-img fluid class="gameThumbnail" :src="modifyURL(game.box_art_url)"></b-img>
                              <h5 class="gameTitle">{{game.name}}</h5>
                         </b-card>
                    </slide>
               </carousel>
          </b-col>
     </b-row>
</b-container>
</template>

<script>
import axios from 'axios'
import topStreams from '../components/topStreams.vue'
export default {
     name: "home",
     data() {
          return {
               topGames: [],
               rawURL: "",
               client_id: "amqpdgnbrz8x3s8wz9ytthf8r6zbv6"
          };
     },
     methods: {
          getGames() {
               let v = this;
               const helix = axios.create({
                    baseURL: "https://api.twitch.tv/helix/",
                    headers: {
                         "Client-ID": this.client_id,
                    }
               });
               helix.get("games/top").then(function (response) {
                    v.topGames = response.data.data;
                    console.log(v.topGames)
               });
          },
          modifyURL(url) {
               let newURL = "";
               this.newURL = url.slice(-0, -20)
               return this.newURL += "450x450.jpg";
          }
     },
     created() {
          this.getGames();
     },
}
</script>

<style scoped>
.gameThumbnail {
     width: 100%;
}

.card {
     -webkit-box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.5);
     -moz-box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.5);
     box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.5);
     border-radius: 10px;
     overflow: hidden;
}

.card-body {
     padding: 0%;
}

.gameTitle {
     width: 60%;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
     font-size: 1.25rem;
     color: white;
     background: rgba(255, 255, 255, 0.562);
     border-radius: 5px;
     padding: 2px 10px 2px 10px;
     position: absolute;
     bottom: 2%;
     left: 2%;
}
</style>
