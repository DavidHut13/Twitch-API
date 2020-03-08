<template>
<div>
    <b-container class="p-0">
        <b-row no-gutters>
            <b-col>
                <b-card :sub-title="streamers.title" :img-src="modifyURL(streamers.thumbnail_url)" img-top tag="article" class=" streamerCard m-2">
                    <h5 class="streamerName">{{streamers.user_name}}</h5>
                    <p class="live px-2">Live</p>
                    <p class="views px-1">Views: {{streamers.viewer_count}}</p>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            data: [],
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

<style >
::v-deep h6.card-subtitle.text-muted.mb-2 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card-header {
    background-color: rgb(96, 73, 150);
    color: white;
}

.streamerCard {
    background-color: white;
    color: white;
}

.streamerCardButton {
    background-color: rgb(96, 73, 150);
    border-color: rgb(96, 73, 150);
}

.card-img-top {
    height: 275px;
}

.card {
    height: 375px;
    -webkit-box-shadow: 0px 0px 38px -20px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 38px -20px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 38px -20px rgba(0, 0, 0, 0.75);
    

}

.live {
    position: absolute;
    top: 2%;
    background: rgba(255, 36, 36, 0.733);
    border-radius: 15px;
}

.views {
    position: absolute;
    top: 66%;
    background: rgba(0, 0, 0, 0.733);
    border-radius: 5px;
}

.streamerName {
    position: absolute;
    bottom: 0;
    color: rgb(96, 73, 150);
}
</style>
