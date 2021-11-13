<template>
        <v-container v-show="!$vuetify.breakpoint.mobile" class="contact-info-container">
            <Icon :icon="icons.stackOverflow" :style="{color: '#CC5500'}" />
            <svg width="72" height="5122" viewBox="0 0 72 5122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70 0V426.5L2 515V1013.5V2420V4073.5V5122" stroke="#F1FAEE" stroke-width="3"/>
            </svg>

        </v-container>
</template>

<script>
import { Icon } from '@iconify/vue2';
import stackOverflow from '@iconify/icons-fontisto/stack-overflow'

export default {
    components: {
        Icon,
    },

    data() {
        return {
            icons: stackOverflow,
        }
    }
}

</script>

<style scoped>
.contact-info-container {
    position: fixed;
    height: 100%;
    width: 5%;
}
</style>