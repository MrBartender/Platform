<template>
  <md-app id="dashboard" md-waterfall md-mode="fixed">
    <!-- Toolbar -->
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
            <fa-icon icon="bars" class="md-icon"></fa-icon>
          </md-button>

          <span class="md-title">Mr. Bartender</span>
        </div>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button" @click="signOut">
            <fa-icon icon="sign-out-alt" class="md-icon"></fa-icon>
          </md-button>
        </div>
      </div>
    </md-app-toolbar>

    <!-- Sidebar -->
    <md-app-drawer id="sidebar-drawer" :md-active.sync="menuVisible" md-persistent="mini">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Mr. Bartender</span>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button md-dense" @click="toggleMenu">
            <fa-icon icon="angle-left" class="md-icon"></fa-icon>
          </md-button>
        </div>
      </md-toolbar>

      <sidebar></sidebar>
    </md-app-drawer>

    <!-- Page content -->
    <md-app-content>
      <router-view />
    </md-app-content>
  </md-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'dashboard',
  components: {
    sidebar: Sidebar
  },
  data: () => ({
    menuVisible: true
  }),
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<style lang="stylus">
#dashboard
  height 100vh

#sidebar-drawer
  width 225px
  max-width calc(100vw - 125px)
</style>
