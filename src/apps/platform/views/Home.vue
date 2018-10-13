<template>
  <div>
    <h1>Welcome to the Bartender Platform!</h1>
    <router-link :to="{ name: 'signin' }">Sign In</router-link>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
