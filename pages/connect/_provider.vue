<template>
  <div>
    <v-card>
      <v-card-text>
        Authorizing... 
      </v-card-text>
    </v-card>
  </div>
</template>
<script>

export default {
  data() {
    return {
      provider: this.$route.params.provider,
      access_token: this.$route.query.access_token,
    }
  },
  async mounted() {
    console.log( this.$route.query)
    const res = await this.$axios.$post(
      `/auth/${this.provider}/callback?access_token=${this.access_token}`
    )
    
    const { jwt, user } = res
    // store jwt and user object in localStorage
    this.$auth.$storage.setUniversal('jwt', jwt)
    this.$auth.$storage.setUniversal('user', { username: user.username, id: user.id, email: user.email })


    console.log(user)
    this.$router.push(`/dashboard`)
  },
}
</script>
<style lang="scss" scoped></style>