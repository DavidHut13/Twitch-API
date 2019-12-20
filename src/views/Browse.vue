<template>
<div>
    <b-container>
        <b-row>
            <b-col cols="12" class="mt-5">
                <h2>Browse By Game</h2>
            </b-col>
            <b-col>
                <b-card class="gameCatagoryCard">
                    Game 1
                </b-card>
            </b-col>
            <b-col >
                <b-card overlay class="gameCatagoryCard">
                    Game 2
                </b-card>
            </b-col>
            <b-col >
                <b-card overlay class="gameCatagoryCard">
                    Game 3
                </b-card>
            </b-col>
            <b-col >
                <b-card overlay class="gameCatagoryCard">
                    Game 4
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>

</script>

<style scoped>
.gameCatagoryCard {
    -webkit-box-shadow: 0px 0px 15px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 15px -9px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -9px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    height: 400px;
}
</style>
