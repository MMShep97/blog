<template>
  <div class="site-container">
  </div>
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
  body {
    background-color:rgb(250, 243, 233);
  }

  html {
    background-color:rgb(250, 243, 233);
  }
</style>