<template>
      <v-container fluid fill-height class="px-12">
          <v-row align="center" justify="center">
              <v-col xl="6" lg="7" cols="12" class="content pl-xl-16 pl-0" >
                  <v-card class="cardBackground" :class="`elevation-${$vuetify.breakpoint.lgAndUp ? '12' : '0'}`">
                      <v-card-title>
                          <v-row align="center">
                              <v-col cols="1" class="pr-0"><span class="primaryAccent--text">1. </span></v-col>
                              <v-col cols="2" class="pl-0"><span class="ml-2">About Me</span></v-col>
                              <!-- <v-col cols="9"><v-divider class=""></v-divider></v-col> -->
                          </v-row>
                          <!-- <hr style="height: 2px; background-color: white; width: 100px;" color="white"/> -->
                      </v-card-title>
                      <span v-for="content in introSeparatedByParagraphs" :key="content">
                          <v-card-text>{{content}}</v-card-text>
                      </span>
                      <v-list class="cardBackground" v-for="tech in technologies" :key="tech">
                          <v-list-item>{{tech}}</v-list-item>
                      </v-list>
                  </v-card>
              </v-col>
              <v-col xl="6" lg="5" cols="12" class="image fill-height" :style="`padding-left: ${imageHorizontalPadding} !important; padding-right: ${imageHorizontalPadding} !important;`">
                                          <cld-image public-id="sheep_014977a895" responsive="width" width="auto" dpr="auto">
                                                                  <cld-transformation aspect-ratio="1:1" radius="20" crop="fill" fetchFormat="auto"></cld-transformation>
                                                                  <cld-transformation quality="auto" loading="lazy"></cld-transformation>
                                                                  <cld-placeholder type="blur" />
                                                              </cld-image>
              </v-col>
          </v-row>
      </v-container>
</template>

<script>
export default {
    data() {
        return {
            introSeparatedByParagraphs: [
                "Hey there, I’m Marc... ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                "Here are a few technologies I've been working with recently:"
            ],
            technologies: ['Kotlin', 'Vue', 'Spring', 'Springing', 'SpringV2']
        }
    },
  computed: {
    imageHorizontalPadding() {
            switch (this.$vuetify.breakpoint.name) {
        case 'xs': return "200px"
        case 'sm': return "200px"
        case 'md': return "300px"
        case 'lg': return "20px"
        case 'xl': return "200px"
      }
    }
  },
}
</script>

<style scoped>

</style>
