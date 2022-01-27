<template>
  <v-app app>
    <v-app-bar elevation="12" color="blue darken-4" dark elevate-on-scroll app>
      <v-app-bar-title>Penta CMS</v-app-bar-title>
      <v-btn text>Home</v-btn>
      <v-btn text>About</v-btn>
      <v-btn text>Services</v-btn>
      <v-spacer />
      <v-btn text>Sign In</v-btn>
      <v-btn v-if="this.$auth.loggedIn == false" dark style="border-radius:100px; ;background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);" href="https://cdn.pentacms.com/connect/google"  elevation="0">Sign Up</v-btn>
    </v-app-bar>
    <v-container>
      <v-main>
        <Nuxt />
      </v-main>
    </v-container>
    <v-footer absolute>
      Copyright © 2022 Penta Career Center. All Rights Reserved.
    </v-footer>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>