<template>
<div>
    <b-container fluid>
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
                <b-card class="gameCatagoryCard">
                    <b-img fluid class="videoThumbnail" :src="modifyURL(streamer.thumbnail_url)"></b-img>
                    <h5 class="streamerName">{{streamer.user_name}}</h5>
                    <!-- <h3 class="streamTitle">{{streamer.title}}</h3> -->
                    <p class="live px-2">Live</p>
                    <p class="views px-1"><i class="far fa-eye"></i> {{streamer.viewer_count}}</p>
                    <b-button variant="none" class="watchNowBtn mr-auto">watch now</b-button>
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
                console.log(v.streamers)
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
        }
    },
    created() {
        this.getStreams();
        this.getGames();
    }
};
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

.views {
    position: absolute;
    bottom: 8%;
    left: 2%;
    display: inline-block;
    height: 25px;
    background: rgba(0, 0, 0, 0.733);
    border-radius: 5px;
    color: white;
}

.videoThumbnail {
    width: 100%;
}

.loadingStreamers {
    height: 50vh;
}

.loadingBtn {
    background: rgb(96, 73, 150);
    color: white;
}

.watchNowBtn {
    background: rgb(96, 73, 150);
    color: white;
}

.videoThumbnail {
    overflow: hidden;
}

.streamTitle {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.live {
    position: absolute;
    top: 2%;
    left: 2%;
    background: rgba(255, 36, 36, 0.733);
    border-radius: 5px;
    color: white;
}

.streamerName {
    color: rgb(96, 73, 150);
    float: left;
}

.flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
