<template>
  <div>
    <v-app dark>
      <the-navbar />
      <v-main>
        <nuxt />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue'

export default {
  components: { TheNavbar },
  data() {
    return {
    }
  },
}

</script>

<style>
.theme--dark.v-application {
  background-color: var(--v-background-base, --v-background-base) !important;
}

.nav-number-color {
  color: #E63946;
}

.nav-logo-wrapper {
  width: 100px;
  height: 100%;
}

.nav-logo {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>