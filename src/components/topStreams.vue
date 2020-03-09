<template>
<b-container fluid>
     <b-row>
          <b-col v-if="streamers.length <= 0" cols="12" class="flexCenter loadingStreamers">
               <b-button class="loadingBtn" variant="none" disabled>
                    <b-spinner small type="grow"></b-spinner>
                    Loading...
               </b-button>
          </b-col>
          <b-col else class="my-3" cols="12" md="6" lg="4" xl="3" v-for="(streamer,index) in streamers" :key="index">
               <b-card>
                    <b-img fluid class="videoThumbnail" :src="modifyURL(streamer.thumbnail_url)"></b-img>
                    <div class="viewsWrapper">
                         <p class="live px-2">Live</p>
                         <p class="views px-1"><i class="far fa-eye"></i> {{streamer.viewer_count}}</p>
                    </div>
                    <h5 class="streamerName">{{streamer.user_name}}</h5>
               </b-card>
          </b-col>
     </b-row>
</b-container>
</template>

<script>
import axios from 'axios'
export default {
     name: "topStreams",
     data() {
          return {
               streamers: [],
               rawURL: "",
               client_id: "amqpdgnbrz8x3s8wz9ytthf8r6zbv6"
          };
     },
     methods: {
          getStreams() {
               let v = this;
               
               const helix = axios.create({
                    baseURL: "https://api.twitch.tv/helix/",
                    headers: {
                         "Client-ID": this.client_id,
                    }
               });
               helix.get("streams?first=10").then(function (response) {
                    v.streamers = response.data.data;
                    console.log(v.streamers)
               });
          },
          modifyURL(url) {
               let newURL = "";
               this.newURL = url.slice(-0, -20)
               return this.newURL += "450x450.jpg";
          },
         
     },
      created() {
               this.getStreams();
          }
}
</script>

<style scoped>
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

.videoThumbnail {
     width: 100%;
}

.live {
     background: rgba(255, 36, 36, 0.733);
     border-radius: 5px;
     color: white;
     display: inline-block;
     margin-right: 5px;
}

.loadingStreamers {
     height: 50vh;
}

.views {
     display: inline-block;
     height: 25px;
     background: rgba(0, 0, 0, 0.733);
     border-radius: 5px;
     color: white;

}

.watchNowBtn {
     background: rgb(96, 73, 150);
     color: white;

     display: inline;
}



.streamerName {
     color: white;
     background: rgba(255, 255, 255, 0.562);
     border-radius: 5px;
     padding: 2px 10px 2px 10px;
     position: absolute;
     bottom: 2%;
     left: 2%;

}

.streamTitle {
     width: 60%;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
     font-size: 1.25rem;
     color: rgba(44, 44, 44, 0.685);
}

.viewsWrapper {
     position: absolute;
     top: 2%;
     left: 2%;
}

.flexCenter {
     display: flex;
     justify-content: center;
     align-items: center;
}

.loadingBtn {
     background: rgb(207, 49, 255);
     color: white;
     padding:2px 20px 2px 20px;
     border-radius:20px;
     -webkit-box-shadow: 0px 0px 18px -5px rgba(0,0,0,0.5);
-moz-box-shadow: 0px 0px 18px -5px rgba(0,0,0,0.5);
box-shadow: 0px 0px 18px -5px rgba(0,0,0,0.5);

}
</style>
