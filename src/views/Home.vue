<template>
<div>
     <b-container fluid class='homepage_background'>
          <b-row>
               <b-col cols="12" md="4" offset-md="1" class="mainHeaderWrapper">
                    <div>
                         <h1 class="mainHeader mb-3">watch. stream. connect.</h1>
                         <b-button @click="pushUserTo" variant="none" class="browseBtn">
                              <h4>watch now</h4>
                         </b-button>
                    </div>
               </b-col>
          </b-row>
     </b-container>

</div>
</template>

<script>
import axios from "axios";
export default {
     name: "home",
     methods: {
          pushUserTo() {
               this.$router.push({
                    name: "browse",
               })
          },
     },

};
</script>

<style scoped>
.homepage_background {
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
     height: 94.15vh;
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
