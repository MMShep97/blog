<template>
  <v-container fill-height class="main-content-container">
      <v-row class="fill-height px-10">
        <v-col cols="6">
          <div class="header-content">
            <h2 class="name">Marc Shepherd</h2>
            <div>
              <h3 class="title">Software Engineer</h3>
            </div>
            <v-divider />
            <div class="blurb">
              A software engineer with a soft spot for my puppy Saffron. Currently, I’m focusing on modernizing the invoicing ecosystem at Hy-Vee!
            </div>
          </div>
        </v-col>
        <v-row class="pl-4">
        <v-col cols="6" class="image-col">
          <v-card height="50%">
            test
          </v-card>
          <v-card height="50%" class="small-image">
            test
          </v-card>
        </v-col>
        <v-col cols="6" class="image-col">
          <v-card height="100%" class="large-vert-image">
            test
            </v-card>
        </v-col>
        </v-row>
      </v-row>
  </v-container>
</template>

<script>
import articlesQuery from '~/apollo/queries/article/articles'
import Articles from '~/components/Articles'

export default {
  data() {
    return {
      articles: [],
    }
  },
  components: {
    Articles
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>

<style scoped>
</style>

<style>
.main-content-container {
  margin: 5% 10% 0 5%;
  height: 400px;
  background-color: #192D4A;
}

.header-content > .name {
  size: 10px;
  color: white;
}

.header-content > .title {
  size: 12px;
  color: white;
}

.image-col {

}
</style>