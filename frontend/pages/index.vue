<template>
<v-container fluid class="index-container px-lg-and-up-16 px-md-8">
    <the-introduction-container id="introduction" />
    <!-- <div class="vertical-spacer" />
    <v-lazy v-model="aboutIsActive" :options="{ threshold: .5 }" transition="fade-transition" :min-height="1">
      <about id="about" />
    </v-lazy>
    <v-lazy v-model="experienceIsActive" :options="{ threshold: .5 }" transition="fade-transition" :min-height="1">
      <div class="vertical-spacer" />
    <experience id="experience" />
    </v-lazy>
    <div class="vertical-spacer" />
    <v-lazy v-model="workIsActive" :options="{ threshold: .5 }" transition="fade-transition" :min-height="1">
      <work id="work" />
      </v-lazy> -->
    <div class="vertical-spacer" />
    <v-lazy v-model="contactIsActive" :options="{ threshold: .5 }" transition="fade-transition" :min-height="1">
      <contact id="contact" />
      </v-lazy>
</v-container>
</template>

<script>
import articlesQuery from '~/apollo/queries/article/articles'
import Articles from '~/components/Articles'

export default {
  data() {
    return {
        aboutIsActive: false,
        experienceIsActive: false,
        workIsActive: false,
        contactIsActive: false,
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
.vertical-spacer {
  margin-top: 300px;
  margin-bottom: 300px;
}

</style>
