<template>
    <span>
      <!-- can either do prominent or height="100" -->
        <v-app-bar app flat prominent shrink-on-scroll  hide-on-scroll elevate-on-scroll elevation="6" color="background">
            <v-container fill-height class="icon-wrapper py-2 px-1">
              <NuxtLink class="home-link" to="/"><saffron /></NuxtLink>
            </v-container>
              <v-spacer></v-spacer>
              <div v-show="$vuetify.breakpoint.mobile">
                  <v-app-bar-nav-icon @click="drawer = true" color="primaryAccent"></v-app-bar-nav-icon>
              </div>
              <div v-show="!$vuetify.breakpoint.mobile" class="fill-height">
            <v-container class="my-0 mx-0 px-0 py-0" fill-height align="center">

                <v-btn v-for="item in navigation" :key="item.order" color="background" style="text-transform: unset" depressed>
                  <span class="primaryAccent--text text-body-1 font-weight-light">{{item.order}}</span>
                  <span class="text-body-1 font-weight-light">{{item.title}}</span>
                </v-btn>
                <v-btn outlined large class="text-center" color="primaryAccent" style="text-transform: unset">
                  <span>Resume</span>
                </v-btn>
            </v-container>
                  <!-- <div class="d-flex flex-row">
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
                  </div> -->
              </div>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary color="background">
            <v-container class="nav-drawer-content">
                <div v-for="item in navigation" :key="item.order" class="mr-6">
                <span class="nav-number-color">{{item.order}} </span>
                <span>{{item.title}}</span>
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
    </span>
</template>

<script>
import Saffron from './svg/Saffron.vue'

export default {
  components: {
    Saffron
  },
    data() {
        return {
            drawer: false,
            navigation: [
              { order: "1.", title: "About" },
              { order: "2.", title: "Experience" },
              { order: "3.", title: "Work" },
              { order: "4.", title: "Contact" },
            ],
        }
    },
}
</script>

<style scoped>
.saffron-icon {
height: 100%;
  width: 100%;
  }

.icon-wrapper {
  position: relative;
  width: 100px;
}

svg {
  height: 100%;
  width: 100%;
}

.home-link {
  height: 100%;
  width: 100%;
}

</style>
