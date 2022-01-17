<template>
      <v-container fill-height class="cardBackground rounded-xl px-6 py-6 intro-container">
      <v-row class="fill-height px-10">
        <v-col cols="6" class="pr-12">
          <div class="cardBackground ml-12 px-6 py-10" style="height: 100%">
              <div class="header-content">
                <div class="side-line lightMediumAccent"></div>
                  <div class="name primary--text text-h2 font-weight-bold pb-2">Marc Shepherd</div>
                  <div class="primary--text text-h4 font-weight-normal">Software Engineer</div>
              </div>
                <p class="blurb my-10">
                A software engineer with a soft spot for my puppy Saffron. Currently, I’m focusing on modernizing the invoicing ecosystem at Hy-Vee!
                </p>
                                            <div class="button-wrapper">
                                    <div class="button-shadow"></div>
                                    <v-btn class="submit-button" color="primaryAccent" tile x-large>
                                        <span>Get in touch</span>
                                    </v-btn>
                                </div>
          </div>
        </v-col>
        <v-col class="pl-12">

        <v-row class="fill-height" fill-height no-gutters>
            <v-col cols="6" class="image-col d-flex" style="flex-direction: column" fill-height>

              <!-- <v-card height="50%"> -->
                <v-col >
                    <cld-image public-id="sheep_014977a895" responsive="width" width="auto" dpr="auto">
                        <cld-transformation radius="20" crop="fill" fetchFormat="auto"></cld-transformation>
                        <cld-transformation quality="auto" loading="lazy"></cld-transformation>
                        <cld-placeholder type="blur" />
                    </cld-image>
                </v-col>
                                    <v-col >
                                        <cld-image public-id="sheep_014977a895" responsive="width" width="auto" dpr="auto">
                                                                <cld-transformation radius="20" crop="fill" fetchFormat="auto"></cld-transformation>
                                                                <cld-transformation quality="auto" loading="lazy"></cld-transformation>
                                                                <cld-placeholder type="blur" />
                                                            </cld-image>
                                    </v-col>
              <!-- </v-card> -->

            </v-col>
            <v-col cols="6" class="image-col">
                                                          <v-col>
                                                              <cld-image public-id="small_imagecon_group_d90dfde724" height="1000" width=400>
                                                                    <cld-transformation radius="20" crop="scale" fetchFormat="auto"></cld-transformation>
                                                                    <cld-transformation quality="auto" loading="lazy"></cld-transformation>
                                                                    <cld-placeholder type="blur" />
                                                                </cld-image>
                                                          </v-col>
            </v-col>
        </v-row>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.intro-container {
  height: 800px;
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
