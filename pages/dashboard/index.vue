<template>
  <div>
      <h1>Welcome {{$auth.$storage.getUniversal('user').username}}</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>