<template>
<div>
<v-app-bar app absolute elevate-on-scroll dense color="var(--v-background-base)">
            <div class="nav-logo-wrapper">
              <v-icon class="nav-logo">$saffron</v-icon>
            </div>
             <v-spacer></v-spacer>
             <div v-show="$vuetify.breakpoint.mobile">
                 <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
             </div>
             <div v-show="!$vuetify.breakpoint.mobile">
                 <div class="d-flex flex-row">
                <div class="mr-6">
                <span class="nav-number-color">1. </span>
                <span>About</span>
                </div>
                <div class="mr-6">
                <span class="nav-number-color">2. </span>
                <span>Experience</span>
                </div>
                <div class="mr-6">
                <span class="nav-number-color">3. </span>
                <span>Work</span>
                </div>
                <div class="mr-6">
                <span class="nav-number-color">4. </span>
                <span>Contact</span>
                </div>
                </div>
            </div>
          </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary color="var(--v-background-base)">
            <v-container class="nav-drawer-content">
                            <div class="mr-6">
                <span class="nav-number-color">1. </span>
                <span>About</span>
                </div>
                <div class="mr-6">
                <span class="nav-number-color">2. </span>
                <span>Experience</span>
                </div>
                <div class="mr-6">
                <span class="nav-number-color">3. </span>
                <span>Work</span>
                </div>
                <div class="mr-6">
                <span class="nav-number-color">4. </span>
                <span>Contact</span>
                </div>
                <v-container class="contact-info">
                    <v-container class="social-media">
                        <div>SO</div>
                        <div>Linkedin</div>
                        <div>Github</div>
                    </v-container>
                </v-container>
            </v-container>
        </v-navigation-drawer>
        </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: null
        }
    },
}
</script>

<style scoped>

</style>