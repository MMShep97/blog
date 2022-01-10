<template>
      <v-container fill-height class="cardBackground">
      <v-row class="fill-height px-10">
        <v-col cols="6">
          <v-card class="header-content fill-height cardBackground">
            <v-card-text>
                  
                <h2 class="name">Marc Shepherd</h2>
                <div>
                    <h3 class="title">Software Engineer</h3>
                </div>
                <v-divider />
                <div class="blurb">
                A software engineer with a soft spot for my puppy Saffron. Currently, I’m focusing on modernizing the invoicing ecosystem at Hy-Vee!
                </div>
            </v-card-text>
          </v-card>
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
.main-content-container {
  background-color: var(--v-cardBackground-base);
}

.header-content > .name {
  size: 10px;
  color: white;
}

.header-content > .title {
  size: 12px;
  color: white;
}

</style>