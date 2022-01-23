<template>
    <v-app dark color="background">
        <the-navbar id="navbar"/>
        <the-contact-info id="contact-info"/>
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
  }
}

</script>

<style>
/* div[data-app='true'] {
  background: url('../assets/images/circuit-board.svg') center center fixed !important;
  background-size: contain !important;
  background-color: var(--v-background-base) !important;
}

.v-app-bar, .v-navigation-drawer {
    background: url('../assets/images/circuit-board.svg') center center !important;
  background-size: cover !important;
  background-color: var(--v-background-base) !important;

} */

.v-application {
  background-color: var(--v-background-base) !important;
  font-family: 'Poppins' !important;
}

.primary-text-style {
  font-family: 'Courier Prime' !important;
}

.secondary-text-style {
  font-family: 'Poppins' !important;
}

</style>
