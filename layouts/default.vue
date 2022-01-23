<template>
  <v-app app>
    <v-app-bar elevate-on-scroll app>
      <v-app-bar-title>Penta CMS</v-app-bar-title>
      <v-spacer />
      <v-btn v-if="this.$auth.loggedIn == false" style="background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);" href="https://cdn.pentacms.com/connect/google"  elevation="0">Login</v-btn>
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