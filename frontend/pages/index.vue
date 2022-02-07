<template>
<v-container fluid class="index-container px-lg-and-up-16 px-md-8">
      <!-- TODO: get rid of this once site is nearish complete -->
      <v-snackbar v-model="snackbar" timeout="50000" shaped color="darkAccent">
        <span>This site is currently a work in progress!</span>
        <template v-slot:action="{ attrs }">
            <v-btn
            color="primaryAccent"
            text
            v-bind="attrs"
            @click="snackbar = false"
            >
            Close
            </v-btn>
        </template>
    </v-snackbar>
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
      <contact id="contact" />
</v-container>
</template>

<script>
import articlesQuery from '~/apollo/queries/article/articles'
import Articles from '~/components/Articles'

export default {
  data() {
    return {
        snackbar: false,
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
  },
  mounted() {
    this.snackbar = true
},
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
