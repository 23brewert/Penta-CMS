<template>
 
      <v-layout align-center justify-center>
         <v-flex xl3>
              <v-card dark elevation="0" color="blue">
                
              <v-card-text v-if="this.$auth.loggedIn == false">
                  <h1 style="color:white;">Penta CMS - Login</h1>
                  <p>At time of authorization we </p>
                  <br>


                  <v-btn block  href="https://data.pentacms.com/connect/google"><v-icon left>mdi-google</v-icon>Login With Google</v-btn></v-card-text>
          </v-card>
         </v-flex>
      </v-layout>
 
</template>

<script>
export default {
auth:'guest',
}
</script>

<style>

</style>