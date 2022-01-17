<template>
<v-container class="index-container px-16">
    <introduction />
    <div class="my-16"/>
    <about />
        <div class="my-16"/>
    <jobs />
    <contact />
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

</style>
