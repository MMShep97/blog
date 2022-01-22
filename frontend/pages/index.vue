<template>
<v-container fluid class="index-container px-lg-and-up-16 px-md-8">
    <the-introduction-container id="introduction" />
    <div class="vertical-spacer" />
    <about id="about" />
    <div class="vertical-spacer" />
    <experience id="experience" />
    <div class="vertical-spacer" />
    <work id="work" />
    <div class="vertical-spacer" />
    <contact id="contact" />
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
.vertical-spacer {
  margin-top: 300px;
  margin-bottom: 300px;
}

</style>
