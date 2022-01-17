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
  font-family: 'Courier Prime' !important;
}

.nav-number-color {
  color: #E63946;
}

.primary-text-style {
  font-family: 'Courier Prime' !important;
}

.secondary-text-style {
  font-family: 'Poppins' !important;
}

</style>
