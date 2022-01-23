<template>
    <v-container
    :fluid="$vuetify.breakpoint.lgAndDown ? true : false"
    fill-height class="pr-lg-16">
            <v-row>
                <v-col offset="1" cols="11" class="text-h5">
                    <span style="color: var(--v-primaryAccent-base)">4.</span>
                    <span class="font-weight-bold" >Now What?</span>
                    <span class="divider" />
                </v-col>
            </v-row>
                <v-row class="content-container px-2 px-sm-10 py-md-16 py-6 rounded-xl">
                    <v-col cols="12" sm="6" md="6" lg="6" xl="5" class="py-lg-12 pt-12">
                            <div :class="`${headerFontSize} font-weight-bold secondary-text-style`" style="font-family: 'Poppins' !important">Get in Touch</div>
                            <p :class="`${subHeaderFontSize} font-weight-bold secondary-text-style mt-16`" style="font-family: 'Poppins' !important">
                                <span class="secondary--text">Don't hesitate to reach out. My inbox is always open for</span>
                                <span class="lightMediumAccent--text">anyone</span>
                                <span class="secondary--text">to chat</span>
                                <span class="lightMediumAccent--text">about anything!</span>
                            </p>
                    </v-col>
                    <v-spacer />
                    <v-col cols="12" sm="5" class="mr-lg-10 secondary-text-style" style="font-family: 'Poppins' !important">
                            <v-form>
                                <v-text-field
                                    class="name form-input secondary--text rounded-t-xl" style="width: 70%" label="Name" placeholder="John Doe" filled
                                    :rules="[rules.required]">
                                    </v-text-field>
                                <v-text-field
                                    class="email form-input rounded-t-xl" label="Email" style="width: 70%" placeholder="john.doe@gmail.com" filled
                                    v-model="email" :rules="[rules.required, rules.email]">
                                </v-text-field>
                                <!-- <v-text-field class="email form-input" label="Email" placeholder="john.doe@gmail.com" solo></v-text-field> --> <!-- could be good to customize -->

                                <!-- <v-text-field
                                class="message form-input rounded-top-lg" height="150" label="Message" placeholder="Send me a message here!"
                                filled rows="4"
                                :rules="[rules.required]"
                                >
                                </v-text-field> -->

                                <v-textarea class="message form-input rounded-t-xl" label="Message" placeholder="Send me a message here!"
                                filled :rows="$vuetify.breakpoint.lgAndUp ? 5 : 3" row-height="25" shaped counter value="" :rules="[rules.required, rules.counter]">
                                </v-textarea>
                            </v-form>
                            <v-row justify="center" class="mt-6">
                                <div class="button-wrapper">
                                    <div class="button-shadow"></div>
                                    <v-btn class="submit-button px-10" style="text-transform: unset !important;" color="primaryAccent" tile x-large>
                                        <span>Submit</span>
                                    </v-btn>
                                </div>
                            </v-row>
                    </v-col>
                </v-row>
    </v-container>
</template>

<script>
export default {
        data () {
      return {
        title: 'Preliminary report',
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 1000 || 'Max 1000 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Please enter a valid email.'
          },
        },
      }
    },

    computed: {
      headerFontSize() {
          switch (this.$vuetify.breakpoint.name) {
        case 'xs': return "text-h4"
        case 'sm': return "text-h4"
        case 'md': return "text-h3"
        case 'lg': return "text-h2"
        case 'xl': return "text-h1"
      }
      },

      subHeaderFontSize() {
                  switch (this.$vuetify.breakpoint.name) {
        case 'xs': return "text-h5"
        case 'sm': return "text-h5"
        case 'md': return "text-h5"
        case 'lg': return "text-h4"
        case 'xl': return "text-h4"
      }
      }
    }
}
</script>

<style scoped>
.content-container {
    background-color: var(--v-cardBackground-base)
}

::v-deep .v-input__slot {
    background: var(--v-secondary-base) !important;
}

::v-deep .v-text-field__slot > label {
    opacity: 1 !important;
    color: var(--v-primary-base) !important;
    font-weight: bold !important;
}

.submit-button {
    color: var(--v-primary-base);
    background-color: var(--v-primaryAccent-base);
}

.button-wrapper {
    position: relative;
    display: inline-block;
}

.button-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: -10px 8px var(--v-background-base);
}

.divider:after,
.divider:before{
    content:"\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0";
    text-decoration:line-through;
}
</style>
