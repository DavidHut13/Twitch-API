<template>
     <b-container fluid>
          <b-row>
               <b-col class="footerContent mt-5" cols="12">
                    <b-link href="https://github.com/DavidHut13/Twitch-API" target="_blank" class="githubLink">
                         <h5 ><i class="fab fa-github"></i> Github</h5>
                    </b-link>
               </b-col>
          </b-row>
     </b-container>
</template>

<script>
export default {
     

}
</script>

<style scoped>
.footerContent {
     height:15vh;
     display:flex;
     justify-content: center;
     align-items: center;
}  

.githubLink{
     color: #212529;
     text-decoration: none;
}
.githubLink:hover{
     color: rgb(153, 112, 247);
     text-decoration: none;
}

</style>