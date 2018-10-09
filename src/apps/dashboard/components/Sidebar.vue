<template>
  <md-list>
    <md-list-item v-for="link in links.sidebar" :key="link.name" :to="{ name: link.name }">
      <fa-icon :icon="link.icon" class="md-icon"></fa-icon>
      <span class="md-list-item-text">{{ link.name | capitalize }}</span>
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>
