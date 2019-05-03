<template>
<div>
    <b-container fluid >
        <b-row>
            <b-col md="10" offset-md="2" lg="10">

                <b-card v-for="(streamers, index) in data" :key="index" :title="streamers.user_name" :sub-title="streamers.title" :img-src="modifyURL(streamers.thumbnail_url)" img-top tag="article" style="width: 25rem" class=" streamerCards ">
                    <b-card-text>
                        Views: {{streamers.viewer_count}}
                    </b-card-text>
                    <b-button href="#" class="streamerCardButton">View</b-button>
                </b-card>
            </b-col>
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

            data: [],
            games: [],
            rawURL: "",
            fields: [{
                    key: "thumbnail_url",
                    label: "thumbnail"
                },
                {
                    key: "user_name",
                    label: "User Name"
                },
                {
                    key: "viewer_count",
                    label: "Viewers"
                },
                {
                    key: "type",
                    label: "Live"
                },

            ],
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
.card-header {
    background-color: rgb(96, 73, 150);
    color: white;
}

.streamerCards {
    -webkit-box-shadow: 0px 21px 27px -8px rgba(153, 32, 153, 0.87);
    -moz-box-shadow: 0px 21px 27px -8px rgba(153, 32, 153, 0.87);
    box-shadow: 0px 21px 27px -8px rgba(153, 32, 153, 0.87);
    background-color: black;
    color: white;
}

.streamerCardButton {
    background-color: rgb(96, 73, 150);
    border-color: rgb(96, 73, 150);
    ;
}
</style>
