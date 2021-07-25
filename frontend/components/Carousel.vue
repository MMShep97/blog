<template>
    <div class="uk-position-relative uk-light" uk-slideshow>
    <ul class="uk-slideshow-items">
        <li v-for="image in images" :key="image.id">
            <img :src="image.image.url" alt="" uk-cover>
        </li>
    </ul>

    <div class="uk-position-bottom-center uk-position-small">
        <ul class="uk-dotnav">
            <li uk-slideshow-item="0"><a href="#">Item 1</a></li>
            <li uk-slideshow-item="1"><a href="#">Item 2</a></li>
            <li uk-slideshow-item="2"><a href="#">Item 3</a></li>
        </ul>
    </div>

</div>
</template>

<script>
    export default {
        props: {
            images: Array
        },
    }
</script>