const localhost = "http://localhost:1337"

export default {
  publicRuntimeConfig: {
    emailJsUserId: process.env.EMAILJS_USER_ID
  },
  env: {
    strapiBaseUri: process.env.BACKEND_URL || localhost
  },

  // for netlify (https://nuxtjs.org/docs/2.x/deployment/netlify-deployment)
  generate: {
    fallback: true
  },

  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Marc Shepherd - Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Staatliches' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'uikit/dist/css/uikit.min.css',
    'uikit/dist/css/uikit.css',
    '@assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    '@nuxtjs/cloudinary',
  ],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // enable HMR so it will work in docker
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
    }
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: (process.env.BACKEND_URL || localhost) + "/graphql"
      }
    }
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  bootstrapVue: {
    icons: true
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    useComponent: true
  },
    vuetify: {
      optionsPath: './vuetify.options.js',
      customVariables: ['./assets/variables.scss'],
      treeShake: true
  },
  googleFonts: {
    families: {
      'Poppins': [100, 300, 400, 500, 700],
      'Courier+Prime': [100, 300, 400, 500, 700]
    }
  }
}

