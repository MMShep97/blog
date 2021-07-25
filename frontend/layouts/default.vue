<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import articlesQuery from '~/apollo/queries/article/articles'
import categoriesQuery from '~/apollo/queries/category/categories'
import TheNavbar from '../components/TheNavbar.vue'

export default {
  components: { TheNavbar },
  data() {
    return {
      categories: [],
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    },
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}

</script>

<style>
body {
  background: #1D3557;
}
</style>