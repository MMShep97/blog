<template>
    <v-app dark color="background">
        <the-navbar />
        <the-contact-info />
        <v-container fluid>
          <v-main>
            <nuxt />
          </v-main>
        </v-container>
    </v-app>
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
.v-application {
  background-color: var(--v-background-base) !important;
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

.primary-text-style {
}

.secondary-text-style {
  font-family: 'Poppins' !important;
}
</style>