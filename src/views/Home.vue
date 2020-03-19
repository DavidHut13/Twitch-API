<template>
<div>
     <b-container fluid class='homepage_background'>
          <b-row>
               <b-col cols="4" offset="1" class="mainHeaderWrapper">
                    <div>
                         <h1 class="mainHeader">watch. stream. connect.</h1>
                         <b-button @click="pushUserTo" variant="none" class="browseBtn">
                              <h4>watch now</h4>
                         </b-button>
                    </div>
               </b-col>
               <!-- <b-col v-for="(streamers, index) in data" :key="index" cols="12" md="6" lg="4">
                <b-card :sub-title="streamers.title" :img-src="modifyURL(streamers.thumbnail_url)" img-top tag="article" class=" streamerCard m-2">
                    <h5 class="streamerName">{{streamers.user_name}}</h5>
                    <p class="live px-2">Live</p>
                    <p class="views px-1">Views: {{streamers.viewer_count}}</p>
                </b-card>
            </b-col> -->
          </b-row>
     </b-container>

</div>
</template>

<script>
import axios from "axios";
export default {
     name: "home",
     data() {
          return {
               client_id: "amqpdgnbrz8x3s8wz9ytthf8r6zbv6"
          };
     },
     methods: {
          getStreams() {
               let v = this;
               const helix = axios.create({
                    baseURL: "https://api.twitch.tv/helix/",
                    headers: {
                         "Client-ID": this.client_id
                    }
               });
               helix.get("streams?first=10").then(function (response) {
                    v.data = response.data.data;
               });
          },
          getGames() {
               let v = this;
               const helix = axios.create({
                    baseURL: "https://api.twitch.tv/helix/",
                    headers: {
                         "Client-ID": this.client_id
                    }
               });
               helix.get("games/top").then(function (response) {
                    v.games = response.data.data;
               });
          },
          modifyURL(url) {
               let newURL = "";
               this.newURL = url.slice(-0, -20)
               return this.newURL += "450x450.jpg";
          },
          pushUserTo() {
               this.$router.push({
                    name: "browse",
               })
          },
     },
     created() {
          this.getStreams();
          this.getGames();
     }
};
</script>

<style scoped>
.homepage_background {
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
     height: 95vh;
     background-image: url(/img/gray-scale-image-of-xbox-game-controller-194511.jpg);
}

.mainHeader {
     color: white;
}

.mainHeaderWrapper {
     position: absolute;
     top: 60%;
}

.browseBtn {
     color: white;
     border: 2px solid rgb(153, 112, 247);
     background: none;
     border-radius: 0px;
}

.browseBtn:hover {
     background: rgb(153, 112, 247);
     color: white;
     -webkit-box-shadow: 0px 0px 23px -6px rgb(153, 112, 247);
     -moz-box-shadow: 0px 0px 23px -6px rgb(153, 112, 247);
     box-shadow: 0px 0px 23px -6px rgb(153, 112, 247);

}
</style>
