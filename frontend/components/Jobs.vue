<template>
    <v-container fluid fill-height >
                            <v-card>
                                <v-card-title>
                               <span class="primaryAccent--text">1. </span>
                                <span class="ml-2">About Me</span>
                                <v-divider class=""></v-divider>
                                                        
                                                        
                                                        <!-- <hr style="height: 2px; background-color: white; width: 100px;" color="white"/> -->
                                                    </v-card-title>
                                                    <v-row>
                                                        <v-col class="list"></v-col>
                                                        <v-col class="content">
                                                            <span v-for="(job, i) in jobs" :key="i">
                                                            <v-card-text v-for="(bullet, j) in job.bullets" :key="j">{{bullet}}</v-card-text>
                                                            </span>
                                                        </v-col>
                                                    </v-row>
                            </v-card>
    </v-container>    
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {
                    name: "Hy-Vee",
                    title: "Software Engineer",
                    durationOfStay: "June 2020 - Present",
                    bullets: [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit et mi eu hendrerit. Vivamus interdum dolor et mauris lobortis ornare. ",
                        "Aliquam erat volutpat. Vivamus interdum dolor et mauris lobortis ornare. ",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit et mi eu hendrerit. Aliquam erat volutpat."
                    ],
                },
                {
                    name: "The Studio",
                    title: "Junior Developer",
                    durationOfStay: "Unknown",
                    bullets: [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit et mi eu hendrerit. Vivamus interdum dolor et mauris lobortis ornare. ",
                        "Aliquam erat volutpat. Vivamus interdum dolor et mauris lobortis ornare. ",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit et mi eu hendrerit. Aliquam erat volutpat."
                    ],
                },
                {
                    name: "NADS",
                    title: "Research Assistant",
                    durationOfStay: "Unknown",
                    bullets: [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit et mi eu hendrerit. Vivamus interdum dolor et mauris lobortis ornare. ",
                        "Aliquam erat volutpat. Vivamus interdum dolor et mauris lobortis ornare. ",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit et mi eu hendrerit. Aliquam erat volutpat."
                    ],
                },
            ],
        }
    }
}
</script>

<style scoped>

</style>