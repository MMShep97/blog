<template>
  <div>

    <div class="uk-child-width-1-2" uk-grid>
        <div>
          <NuxtLink v-for="article in leftArticles" :to="{ name: 'articles-id', params: {id: article.id} }" class="uk-link-reset" :key="article.id">
            <div class="uk-card uk-card-hover uk-card-default">
                 <div v-if="article.image" class="uk-card-media-top uk-overflow-hidden">
                     
                  <cld-image
                  :public-id="article.image.url"
                  fetchFormat="auto"
                  quality="auto"
                  crop="scale"
                  alt="Buy Me A Coffee"
                  class="uk-animation-reverse uk-transform-origin-top-right"
                  uk-scrollspy="cls: uk-animation-kenburns; repeat: true"
                  />
                 </div>
                 <div class="uk-card-body">
                   <p id="category" v-if="article.category" class="uk-text-uppercase">{{ article.category.name }}</p>
                   <p id="title" class="uk-text-large">{{ article.title }}</p>
                 </div>
             </div>
         </NuxtLink>

        </div>
        <div>
          <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
            <NuxtLink v-for="article in rightArticles" :to="{ name: 'articles-id', params: {id: article.id} }" class="uk-link-reset" :key="article.id">
              <div class="uk-card uk-card-hover uk-card-default">
                   <div v-if="article.image" class="uk-card-media-top uk-overflow-hidden">
                    <cld-image
                    :public-id="article.image.url"
                    fetchFormat="auto"
                    quality="auto"
                    crop="scale"
                    alt="Buy Me A Coffee"
                                      class="uk-animation-reverse uk-transform-origin-top-right"
                  uk-scrollspy="cls: uk-animation-kenburns; repeat: true"
                    />
                   </div>
                   <div class="uk-card-body">
                     <p id="category" v-if="article.category" class="uk-text-uppercase">{{ article.category.name }}</p>
                     <p id="title" class="uk-text-large">{{ article.title }}</p>
                   </div>
               </div>
             </NuxtLink>
          </div>

        </div>
    </div>

  </div>
</template>

<script>
import articlesQuery from '~/apollo/queries/article/articles'

export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri
    }
  },

  props: {
    articles: Array
  },
  computed: {
    leftArticlesCount(){
      return Math.ceil(this.articles.length / 5)
    },
    leftArticles(){
      return this.articles.slice(0, this.leftArticlesCount)
    },
    rightArticles(){
      return this.articles.slice(this.leftArticlesCount, this.articles.length)
    }
  }
}

</script>