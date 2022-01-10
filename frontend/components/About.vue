<template>
    <v-container fluid fill-height >
        <v-row align="center" justify="center">
            <v-col cols="6" class="content">
                <v-card>
                    <v-card-title>
                        <v-row align="center">
                            <v-col cols="1" class="pr-0"><span class="primaryAccent--text">1. </span></v-col>
                            <v-col cols="2" class="pl-0"><span class="ml-2">About Me</span></v-col>
                            <v-col cols="9"><v-divider class=""></v-divider></v-col>
                        </v-row>
                        
                        <!-- <hr style="height: 2px; background-color: white; width: 100px;" color="white"/> -->
                    </v-card-title>
                    <span v-for="(content, i) in introSeparatedByParagraphs" :key="i">
                        <v-card-text>{{content}}</v-card-text>
                    </span>
                    <v-list v-for="(tech, i) in technologies" :key="i">
                        <v-list-item>{{tech}}</v-list-item>
                    </v-list>
                </v-card>
            </v-col>
            <v-col cols="6" class="image" height="50%">
                <v-card height="100%">
                                        <cld-image public-id="sheep_014977a895" responsive="width" width="auto" dpr="auto">
                                                                <cld-transformation radius="20" crop="fill" fetchFormat="auto"></cld-transformation>
                                                                <cld-transformation quality="auto" loading="lazy"></cld-transformation>
                                                                <cld-placeholder type="blur" />
                                                            </cld-image>
                </v-card>
            </v-col>
        </v-row>
    </v-container>    
</template>

<script>
export default {
    data() {
        return {
            introSeparatedByParagraphs: [
                "Hey there, I’m Marc... ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                "Here are a few technologies I've been working with recently:"
            ],
            technologies: ['Kotlin', 'Vue', 'Spring', 'Spring', 'Spring']
        }
    }
}
</script>

<style scoped>

</style>