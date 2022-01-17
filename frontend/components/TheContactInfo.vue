<template>
    <!-- add permanent prop if you want the nav drawer to stay on mobile -->
    <v-navigation-drawer app floating color="background" mini-variant mini-variant-width="125"> <!-- permanent keeps it from going away on mobile-->
            <v-container fluid class="mt-12 pb-0 nav-container">
              <!-- <div class="top-line-crown-container">
                <svg width="31" height="31">
                    <rect x="12" y="-10" width="20" height="20" transform="rotate(45)" />
                </svg>
              </div> -->
              <div class="top-line-container">
                <svg class="line" viewBox="0 0 100 1000">
                <line class="point" x1="100" y1="0" x2="100" y2="1000" vector-effect="non-scaling-stroke" preserveAspectRatio="none" />
                </svg>
              </div>
              <v-row v-for="(icon, i) in icons" :key="i" class="py-3">
                      <v-col class="d-flex justify-center">
              <a :href="icon.link">
                <v-icon class="icon" size="40">${{ icon.name }}</v-icon>
              </a>
                      </v-col>
                    </v-row>
                <v-row class="pt-3">
                  <v-col class="d-flex justify-center primaryAccent--text">
                    Blog
                  </v-col>
                </v-row>
            </v-container>
              <v-row class="diagonal-line-container">
                <v-col class="pb-0">
                  <svg class="diagonal-line" viewBox="0 0 1000 1000">
                  <line class="point" x1="500" y1="1000" x2="1000" y2="0" vector-effect="non-scaling-stroke" preserveAspectRatio="none" />
                  </svg>
                </v-col>
              </v-row>
              <v-row class="end-line">
                <v-col class="py-0">
                  <svg class="line" viewBox="0 0 100 1000">
                    <line class="point" x1="50" y1="0" x2="30" y2="1000" vector-effect="non-scaling-stroke" preserveAspectRatio="none" />
                  </svg>
                </v-col>
              </v-row>
    </v-navigation-drawer>
</template>

<script>

export default {
    data() {
        return {
            /* change these in vuetify.options.js */
            icons: [
                {name: "linkedin", link: "https://www.linkedin.com/in/marc-shepherd-a67019134" },
                {name: "stackoverflow", link: "https://stackoverflow.com/users/10609282/marc-shepherd" },
                {name: "github", link: "https://github.com/MMShep97" },
            ],
        }
    }
}

</script>

<style scoped>
/* .contact-info-container {
    height: 100%;
    width: 5%;
}

.icons-container {
    top: 0;
    left: 0;
    padding-top: inherit;
    padding-right: inherit;
    padding-bottom: inherit;
    height: 65%;
    width: 100%;
    position: absolute;
} */

.icon {
    width: 100%;
    fill: var(--v-primaryAccent-base)
}

.nav-container {
  position: relative;
}

.top-line-crown-container {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
}
.top-line-container {
    position: absolute;
  top: 0;
  right: 0;
  height: 100%;
}
svg {
  height: 100%;
  overflow: hidden;

}

.point {
  stroke: white;
  stroke-width: 2;
  height: 100%;
  width: 100%;
}

::v-deep .v-navigation-drawer__content{
overflow-y: hidden !important;
}

</style>
