# Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/91fc9ced-e839-478c-8cbe-5bb2b8ffed80/deploy-status)](https://app.netlify.com/sites/marc-shepherd/deploys)

Collecting my thoughts... sharing what I learn in my career

Click [here](https://marc-shepherd.netlify.app/) to navigate to the site!


## Running locally

Prerequisites: [docker](https://www.docker.com), [cloudinary account](https://cloudinary.com/users/register/free) 

1. Add a `.env` file to the `~/backend` folder containing secret information for cloudinary:
```
CLOUDINARY_NAME = 'name'
CLOUDINARY_KEY = 'key'
CLOUDINARY_SECRET = 'secret'
```
2. Run `docker compose up -d` (or `docker-compose up -d` with docker compose v1). 

That should be it! Let docker run its course!

### Additional Notes

The nuxt url it says its running on will not work...

Instead, navigate to either of the following: 

- Frontend: `http://host.docker.internal:3000` or `http://localhost:3000`
- Backend: `http://host.docker.internal:1337` or `http://localhost:1337`

You can also view the top layer `package.json` for helper commands. Simply run `npm run <command>`

## Dev notes (will delete)

1. Nav to mobile nav only works if it starts out mobile...