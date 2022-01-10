<template>
    <v-navigation-drawer app clipped color="transparent">
            <v-container v-show="!$vuetify.breakpoint.mobile" class="contact-info-container">
                <svg width="72" height="5122" viewBox="0 0 72 5122" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M70 0V426.5L2 515V1013.5V2420V4073.5V5122" stroke="#F1FAEE" stroke-width="3"/>
                </svg>
                <div class="icons-container">
                    <v-container fill-height>
                        <v-row v-for="(icon, i) in icons" :key="i" >
                            <a :href="icon.link">
                                <v-icon class="icon">${{ icon.name }}</v-icon>
                            </a>
                        </v-row>
                        <v-row>
                            <span class="primaryAccent--text">Blog</span>
                        </v-row>
                    </v-container>
                </div>
            </v-container>
    </v-navigation-drawer>
</template>

<script>

export default {
    data() {
        return {
            /* change these in vuetify.options.js */
            icons: [
                {name: "linkedin", link: "https://www.linkedin.com/in/marc-shepherd-a67019134" },
                {name: "stackoverflow", link: "https://stackoverflow.com/users/10609282/marc-shepherd" }, 
                {name: "github", link: "https://github.com/MMShep97" },
            ],
            blogColor: "#E63946"
        }
    }
}

</script>

<style scoped>
.contact-info-container {
    height: 100%;
    width: 5%;
}

.icons-container {
    top: 0;
    left: 0;
    padding-top: inherit;
    padding-right: inherit;
    padding-bottom: inherit;
    height: 65%;
    width: 100%;
    position: absolute;
}

.icon {
    width: 100%;
    fill: var(--v-primaryAccent-base)
}
</style>