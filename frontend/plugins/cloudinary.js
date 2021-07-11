import Vue from 'vue';
import Cloudinary, { CldImage }  from 'cloudinary-vue';

require('dotenv').config()

Vue.use(Cloudinary, {
    configuration: { cloudName: process.env.CLOUDINARY_NAME },
    components: [ CldImage ]
})
