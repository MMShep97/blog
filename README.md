# Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/91fc9ced-e839-478c-8cbe-5bb2b8ffed80/deploy-status)](https://app.netlify.com/sites/marc-shepherd/deploys)

Collecting my thoughts... sharing what I learn in my career

Click [here](https://marc-shepherd.netlify.app/) to navigate to the site!


## Running locally

Prerequisites: [docker](https://www.docker.com), [cloudinary account](https://cloudinary.com/users/register/free) 

1. Add a `.env` file to the at the top-level and include information for cloudinary & email.js (if you'd like these tools to work):
```
CLOUDINARY_NAME='name'
CLOUDINARY_KEY='key'
CLOUDINARY_SECRET='secret'
EMAILJS_USER_ID='id' // you'll have to sign up for your own account and change the service & template id for the contact form
```
2. Run `docker compose up -d` (or `docker-compose up -d` with docker compose v1). 
3. Go to the strapi backend (`localhost:1337`) and update permissions (see: [stack overflow post](https://stackoverflow.com/a/64434834/10609282))

That should be it! Let docker run its course!

### Additional Notes

The nuxt url it says its running on might not work...

Instead, navigate to either of the following: 

- Frontend: `http://host.docker.internal:3000` or `http://localhost:3000`
- Backend: `http://host.docker.internal:1337` or `http://localhost:1337`

You can also view the top layer `package.json` for helper commands. Simply run `npm run <command>`

## Dev notes (will delete)