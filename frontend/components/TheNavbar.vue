<template>
    <header>
        <nav class="uk-navbar-container navbar-container uk-light" uk-navbar>
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li><a href="#modal-full" uk-toggle><span uk-icon="icon: table"></span></a></li>
                    <li>
                    <NuxtLink to="/">Home</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li v-for="category in categories" v-bind:key="category.id">
                    <NuxtLink :to="{ name: 'categories-id', params: { id: category.id }}" tag="a">{{ category.name }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import categoriesQuery from '~/apollo/queries/category/categories'

export default {
    data() {
        return {
             categories: [],
        }
    },
    apollo: {
        categories: {
        prefetch: true,
        query: categoriesQuery
        }
    }
}
</script>

<style scoped>

</style>