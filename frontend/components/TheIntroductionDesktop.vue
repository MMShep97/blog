<template>
          <v-container
          :fluid="$vuetify.breakpoint.mobile ? true : false"
          :class="backgroundColor + ' ' + `elevation-${$vuetify.breakpoint.lgAndUp ? '12' : '0'}` + ' rounded-xl pl-6 px-sm-6 intro-container'">
          <!-- <v-row v-if="$vuetify.breakpoint.mobile">HI</v-row> -->
          <v-row class="px-lg-10 py-lg-16" no-gutters>
            <v-col xl="6" lg="6" md="12" sm="12" xs="12" class="pr-xl-16 pr-sm-4 px-0">
              <div :class="backgroundColor +  ' ml-xl-12 pl-6 pt-2 px-md-6 py-md-4'" style="height: 100%">
                  <div class="header-content">
                    <div class="side-line lightMediumAccent"></div>
                      <div class="secondary--text font-weight-light primary-text-style" :style="'font-size:' + smallFontSize + '; font-family: \'Poppins\' !important;'">Hey there, I'm</div>
                      <div class="name primary--text font-weight-bold py-1 primary-text-style" :style="'font-size:' + largeFontSize + '; font-family: \'Poppins\' !important;'">Marc Shepherd,</div>
                      <div class="secondary--text font-weight-light primary-text-style" :style="'font-size:' + mediumFontSize + '; font-family: \'Poppins\' !important;'">a Software Engineer!</div>
                  </div>
                    <p class="blurb py-xl-10 py-lg-4 primary-text-style font-weight-thin" :style="'font-size:' + smallFontSize + '; font-family: \'Poppins\' !important;'">
                    A software engineer with a soft spot for my puppy Saffron. Currently, I’m focusing on modernizing the invoicing ecosystem at Hy-Vee!
                    </p>
                                                <div class="button-wrapper my-5">
                                        <div class="button-shadow"></div>
                                        <v-btn class="submit-button" color="primaryAccent" tile v-bind="buttonSize">
                                            <span
                                            class="secondary-text-style font-weight-thin"
                                            :style="'font-size:' + smallFontSize + '; font-family: \'Poppins\' !important;'"
                                            @click="$vuetify.goTo('#contact', goToOptions)"
                                            >Get in touch
                                            </span>
                                        </v-btn>
                                    </div>
              </div>
            </v-col>
            <v-col v-if="$vuetify.breakpoint.lgAndUp" lg="3" md="12" sm="12" xs="12" class="py-0 pl-12 d-flex flex-column align-stretch">
              <div class="half-size-image mb-2" id="first-image-box">
                                                          <cld-image
                                    public-id="blog/bryce-canyon-sunrise"
                                    quality="auto"
                                    loading="lazy"
                                    dpr="auto"
                                    radius="75"
                                    :aspect-ratio="smallImageAspectRatio"
                                    crop="fill"
                                    fetchFormat="auto"
                                    >
                                    <cld-transformation />
                            <cld-placeholder type="blur" />
                        </cld-image>
                        <!--                                     aspect-ratio="1:1"
                                    width="auto"
                                    responsive="width" -->
                        <!--                                     width="383"
                                    height="343" -->
              </div>
              <div class="half-size-image mt-2">
                                    <cld-image
                                    public-id="blog/saffron-photoshoot"
                                    quality="auto"
                                    loading="lazy"
                                    dpr="auto"
                                    radius="75"
                                    :aspect-ratio="smallImageAspectRatio"
                                    crop="fill"
                                    fetchFormat="auto">
                                    <cld-transformation />
                            <cld-placeholder type="blur" />
                        </cld-image>
                        <!--                                     aspect-ratio="1:1"
                                    width="auto"
                                    responsive="width" -->

                        <!-- <cld-image public-id="blog/shepherd-fam" responsive="width" width="auto" dpr="auto">
                            <cld-transformation radius="25" crop="scale" fetchFormat="auto"></cld-transformation>
                            <cld-transformation quality="auto" loading="lazy"></cld-transformation>
                            <cld-placeholder type="blur" />
                        </cld-image> -->
              </div>
            </v-col>
            <v-col v-if="$vuetify.breakpoint.lgAndUp" lg="3" class="py-0 ml-mdAndDown-4 pl-xl-4">
                <div class="large-image-wrapper fill-height">
                  <cld-image public-id="blog/shepherd-fam"
                     radius="75"
                     :aspect-ratio="largeImageAspectRatio"
                      crop="fill"
                       fetchFormat="auto"
                        quality="auto"
                        loading="lazy">
                        <cld-transformation gravity="auto" />
                        <cld-placeholder type="blur" />
                    </cld-image>
                                            <!--                                     width="391"
                                    height="708" -->
                </div>
            </v-col>
            <!-- <v-col class="pl-12 py-0">
            <v-row class="fill-height" fill-height no-gutters>
                <v-col cols="6" class="image-col d-flex" style="flex-direction: column" fill-height>
                    <v-col class="pt-0 pb-6">
                        <cld-image public-id="sheep_014977a895" responsive="width" width="auto" dpr="auto">
                            <cld-transformation radius="25" crop="fill" fetchFormat="auto"></cld-transformation>
                            <cld-transformation quality="auto" loading="lazy"></cld-transformation>
                            <cld-placeholder type="blur" />
                        </cld-image>
                    </v-col>
                                        <v-col class="pb-0 pt-6">
                                            <cld-image public-id="sheep_014977a895" responsive="width" width="auto" dpr="auto">
                                                                    <cld-transformation radius="20" crop="fill" fetchFormat="auto"></cld-transformation>
                                                                    <cld-transformation quality="auto" loading="lazy"></cld-transformation>
                                                                    <cld-placeholder type="blur" />
                                                                </cld-image>
                                        </v-col>
                </v-col>
                <v-col cols="6" class="image-col">
                                                              <v-col>
                                                                  <cld-image public-id="tall-sample-image" height="1000" width=400>
                                                                        <cld-transformation radius="20" crop="scale" fetchFormat="auto"></cld-transformation>
                                                                        <cld-transformation quality="auto" loading="lazy"></cld-transformation>
                                                                        <cld-placeholder type="blur" />
                                                                    </cld-image>
                                                              </v-col>
                </v-col>
            </v-row>
            </v-col> -->
          </v-row>
            </v-container>
</template>

<script>
export default {

  data() {
    return {
                  goToOptions: {
              duration: 1200,
              offset: 0,
              easing: 'easeInOutCubic',
            },
    }
  },

  computed: {
    smallImageAspectRatio() {
      switch(this.$vuetify.breakpoint.name) {
        case 'xs': return "53:50"
        case 'sm': return "53:50"
        case 'md': return "53:50"
        case 'lg': return "216:223"
        case 'xl': return "53:50"
      }
    },

       largeImageAspectRatio() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return "567:1000"
        case 'sm': return "567:1000"
        case 'md': return "567:1000"
        case 'lg': return "240:462"
        case 'xl': return "567:1000"
      }
  },

    smallFontSize() {
            switch (this.$vuetify.breakpoint.name) {
        case 'xs': return "20px"
        case 'sm': return "30px"
        case 'md': return "30px"
        case 'lg': return "20px"
        case 'xl': return "30px"
      }
    },
          mediumFontSize() {
    console.log(this.$vuetify.breakpoint.name)
    console.log(this.$vuetify.breakpoint.width)

      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return "25px"
        case 'sm': return "50px"
        case 'md': return "45px"
        case 'lg': return "30px"
        case 'xl': return "50px"
      }
  },

  largeFontSize() {
          switch (this.$vuetify.breakpoint.name) {
        case 'xs': return "30px"
        case 'sm': return "70px"
        case 'md': return "55px"
        case 'lg': return "40px"
        case 'xl': return "70px"
      }
  },


  buttonSize() {
              switch (this.$vuetify.breakpoint.name) {
        case 'xs': return { 'large': true }
        case 'sm': return { 'x-large': true }
        case 'md': return { 'x-large': true }
        case 'lg': return { 'large': true }
        case 'xl': return { 'x-large': true }
      }
  },

  backgroundColor() {
                  switch (this.$vuetify.breakpoint.name) {
        case 'xs': return ''
        case 'sm': return ''
        case 'md': return ''
        case 'lg': return 'cardBackground'
        case 'xl': return 'cardBackground'
      }
  }

  },

  mounted() {
    console.log(this.$vuetify.breakpoint.width)
  }

}
</script>

<style scoped>
.intro-container {
  /* min-height: 80vh; */
}

.half-size-image {
  height: 50%;
}

.header-content {
  position: relative;
}

.side-line {
  position: absolute;
  top: 0;
  left: -20px;
  height: 100%;
  border-left: 2px solid white;
  margin: auto;
}

.submit-button {
    color: var(--v-primary-base);
    background-color: var(--v-primaryAccent-base);
    text-transform: unset !important;
}

.button-wrapper {
    position: relative;
    display: inline-block;
}

.button-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: -10px 8px var(--v-background-base);
}

</style>
