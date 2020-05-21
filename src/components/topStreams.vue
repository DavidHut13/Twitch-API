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
            <b-card @click="viewStream(streamer.user_name)">
                <b-img fluid class="videoThumbnail" :src="getPictureURL(streamer.thumbnail_url)"></b-img>
                <div class="viewsWrapper">
                    <p class="live px-2">Live</p>
                    <p class="views px-1"><i class="far fa-eye"></i> {{streamer.viewer_count}}</p>
                </div>
                <h5 class="streamerName ml-2 mt-2 mb-0">{{streamer.user_name}}</h5>
                <p class="streamTitle ml-2 mt-0 mb-1">{{streamer.title}}</p>
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
            client_id: process.env.VUE_APP_twitch_KEY,
        };
    },
    methods: {
        getStreams() {
            let v = this;
            const helix = axios.create({
                baseURL: "https://api.twitch.tv/helix/",
                headers: {
                    "Client-ID": this.client_id,
                    "Authorization": "Bearer " + this.my_access_token,
                }
            });
            helix.get("streams?first=12").then(function (response) {
                v.streamers = response.data.data;
            });
        },
        getPictureURL(url) {
            let newURL = "";
            this.newURL = url.slice(-0, -20)
            return this.newURL += "440x248.jpg";
        },
        viewStream(username) {
            var streamerURL = 'https://www.twitch.tv/' + username;
            window.open(streamerURL, '_blank');

        }

    },
    watch: {
        my_access_token: function () {
            this.getStreams();
        }
    },
    computed : {
         my_access_token() {
              return this.$store.getters.getAccessToken
         }
    }
}
</script>

<style scoped>
.flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    -webkit-box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow: hidden;
    transition: all .2s ease-in;
    border: none;
}

.card:hover {
    transform: translateY(-6px);
    -webkit-box-shadow: 0px 5px 18px -10px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 5px 18px -10px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 5px 18px -10px rgba(0, 0, 0, 0.5);
}

.card-body {
    padding: 0;
    margin: 0;
}

.videoThumbnail {
    width: 100%;
}

.live {
    background: rgba(255, 36, 36, 0.68);
    border-radius: 3px;
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

.streamerName {
    color: rgb(180, 57, 252);
    font-family: 'Roboto Condensed', sans-serif;
}

.underline {
    width: 10%;
}

.streamTitle {
    width: 90%;
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

.loadingBtn {
    background: rgb(207, 49, 255);
    color: white;
    padding: 2px 20px 2px 20px;
    border-radius: 20px;
    -webkit-box-shadow: 0px 0px 18px -5px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 18px -5px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 18px -5px rgba(0, 0, 0, 0.5);
}

.loadingStreamers {
    height: 30vh;
}
</style>
