<template>
<b-container>
    <b-row>
        <b-col cols="12">
            <carousel :responsive="{0:{items:2},600:{items:3},900:{items:4},1100:{items:5},1300:{items:6}}" v-if="loaded" :nav="false" :items="5">
                <b-card class="m-2" v-for="(game,index) in topGames" :key="index">
                    <b-img @click="viewGames(game.name)" fluid class="gameThumbnail" :src="getPictureURL(game.box_art_url)"></b-img>
                    <!-- <h5 class="gameTitle">{{game.name}}</h5> -->
                </b-card>
            </carousel>
        </b-col>
        <b-col cols="12" v-if="!loaded" class="flexCenter loadingStreamers">
            <b-button class="loadingBtn" variant="none" disabled>
                <b-spinner small type="grow"></b-spinner>
                Loading...
            </b-button>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import axios from 'axios'
import topStreams from '../components/topStreams.vue'
import carousel from 'vue-owl-carousel'
export default {
    name: "home",
    data() {
        return {
            topGames: [],
            rawURL: "",
            client_id: process.env.VUE_APP_twitch_KEY,
            client_secret: process.env.VUE_APP_twitch_secret,
            my_access_token: null
        };
    },
    methods: {
        getGames() {
            let v = this;
            const helix = axios.create({
                baseURL: "https://api.twitch.tv/helix/",
                headers: {
                    "Authorization": "Bearer " + this.my_access_token,
                    "client-ID": this.client_id
                }
            });
            helix.get("games/top").then(function (response) {
                v.topGames = response.data.data;
            });

        },
        getOAuth() {
            let v = this;
            axios.post('https://id.twitch.tv/oauth2/token?client_id=' + v.client_id + "&client_secret=" + v.client_secret + "&grant_type=client_credentials" + '&scope=analytics:read:games')
                .then(function (response) {
                    v.my_access_token = response.data.access_token
                    v.$store.dispatch('saveAccessToken',v.my_access_token)
                    v.getGames()
                })
        },
        getPictureURL(url) {
            let newURL = "";
            this.newURL = url.slice(-0, -20)
            return this.newURL += "285x380.jpg";
        },
        viewGames(name) {
            var streamerURL = 'https://www.twitch.tv/directory/game/' + name;
            window.open(streamerURL, '_blank');

        }
    },
    created() {
        this.getOAuth();
    },
    computed: {
        loaded: function () {
            if (this.topGames.length > 0) {
                return true;
            } else {
                return false;
            }
        }
    },
    components: {
        carousel
    },
}
</script>

<style scoped>
.gameThumbnail {
    height: 100%;
}

::v-deep .owl-item {
    padding: .25rem;
}

::v-deep button:focus {
    outline-color: rgb(153, 112, 247);
}

::v-deep .owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
    background: rgb(153, 112, 247);
}

.card {
    -webkit-box-shadow: 0px 0px 13px -5px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 13px -5px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 13px -9px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow: hidden;
    transition: all .2s ease-out;
    display: inline-block;
    border: none;
}

.card:hover {
    transform: translateY(-4px);
    -webkit-box-shadow: 0px 5px 14px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 5px 14px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 5px 14px -6px rgba(0, 0, 0, 0.75);
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
    height: 20vh;
}

.flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
