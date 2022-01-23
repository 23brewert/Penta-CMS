<template>
 
      <v-layout align-center justify-center>
          <v-card>
              <v-card-text v-if="this.$auth.loggedIn == false"><v-btn  href="https://cdn.pentacms.com/connect/google"><v-icon left>mdi-google</v-icon>Login With Google</v-btn></v-card-text>
          </v-card>
      </v-layout>
 
</template>

<script>
export default {

}
</script>

<style>

</style>