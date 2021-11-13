<template>
  <div>
    <v-app dark>
      <the-navbar />
      <v-main>
        <the-contact-info />
        <nuxt />
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}

</script>

<style>
.theme--dark.v-application {
  background-color: var(--v-background-base, rgb(36, 36, 177)) !important;
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