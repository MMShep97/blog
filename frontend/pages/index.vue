<template>
  <div class="site-container">
    <div class="uk-section body-container">
      <div class="uk-container uk-container-large">
        <h1 id="category-name" align="center">Welcome!</h1>
        <Articles :articles="articles"></Articles>
      </div>
    </div>
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