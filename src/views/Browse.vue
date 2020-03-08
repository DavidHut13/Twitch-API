<template>
<div>
    <b-container>
        <b-row>
            <b-col cols="12" class="mt-5">
                <h2>Top Games</h2>
            </b-col>
            <b-col cols="4">
                <b-card></b-card>
            </b-col>
            <b-col cols="4">
                <b-card></b-card>
            </b-col>
            <b-col cols="4">
                <b-card></b-card>
            </b-col>
            <b-col cols="12" class="mt-5">
                <h2>Top Sreamers</h2>
            </b-col>
            <b-col v-if="streamers.length <= 0" cols="12" class="flexCenter loadingStreamers">
                <b-button class="loadingBtn" variant="none" disabled>
                    <b-spinner small type="grow"></b-spinner>
                    Loading...
                </b-button>
            </b-col>
            <b-col else class="my-3" cols="4" v-for="(streamer,index) in streamers" :key="index">
                <b-card class="gameCatagoryCard" :sub-title="streamer.title" :img-src="modifyURL(streamer.thumbnail_url)" img-top tag="article">
                    <h5 class="streamerName">{{streamer.user_name}}</h5>
                    <p class="live px-2">Live</p>
                    <p class="views px-1">Views: {{streamer.viewer_count}}</p>
                    <b-button variant="none" class="watchNowBtn">watch now</b-button>
                </b-card>
            </b-col>

        </b-row>
    </b-container>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "home",
    data() {
        return {
            streamers: [],
            games: [],
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
                    "Client-ID": this.client_id
                }
            });
            helix.get("streams?first=10").then(function (response) {
                v.streamers = response.data.data;
                console.log(v.data)
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
            console.log(data);
        }
    },
    created() {
        this.getStreams();
        this.getGames();
    }
};
</script>

<style scoped>
.views {
    display: inline;
}
.flexCenter{
    display:flex;
    justify-content: center;
    align-items:center;
}
.loadingStreamers{
    height:50vh;
}
.loadingBtn{
     background: rgb(96, 73, 150);
    color: white;
}
.watchNowBtn {
    display: inline;
}

.card {
    -webkit-box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}

.card-subtitle {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.live {
    position: absolute;
    top: 2%;
    background: rgba(255, 36, 36, 0.733);
    border-radius: 5px;
    color: white;
}

.views {
    position: absolute;
    top: 66%;
    background: rgba(0, 0, 0, 0.733);
    border-radius: 5px;
    color: white;
}

.streamerName {
    color: rgb(96, 73, 150);
    float: left;
}

.watchNowBtn {
    background: rgb(96, 73, 150);
    color: white;
    float: right;
}
</style>
