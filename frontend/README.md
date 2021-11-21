# frontend

## Build Setup

```bash
### install dependencies
$ yarn install

### serve with hot reload at localhost:3000
$ yarn dev

### build for production and launch server
$ yarn build
$ yarn start

### generate static project
$ yarn generate
```

Remember to generate a `.env` file locally for external services like Cloudinary, etc.

## Oh my, the issues I've faced

Below, I'll keep a list of notes (fingers crossed I remember to add here) of issues I've faced and how I overcame them.

### Docker galore

For all of the pain came more intimate docker knowledge; it was not all for naught.

# URLs | Hostname resolving | Networking

Docker containers within the same network don't use localhost like on your host machine. Totally makes sense, but it was a little hard to grasp and it was something I took for granted. For example: I was trying to get the frontend to reach out to the `/graphql` endpoint on the backend, but since my local configuration is setup to resolve the apollo http endpoint to `http://localhost:{port}/graphql`, docker doesn't like that, and hits me with an `ECONNREFUSED`. Solutions include using the hostname (ex: `http://backend:{port}/graphql`) (as services on the same network can resolve each other by hostname), or by using `http://host.docker.internal:{port}/graphql`. 

#### Hot module reloading (HMR)

With docker, HMR doesn't work out of the box. Confusion ensues and a wild search engine goose change follows...

What I was missing was a combination of the following:

- Make sure you have volumes for your `node_modules` as well as the `.nuxt` file. Check the top layer frontend service within `docker-compose.yml` to see these added. You want these because this will allow the container to use the docker folders instead of the host OS folders.

- Within `nuxt.config.js`, you'll see a `watchers` block, which contains custom configuration for webpack. This is needed to function properly.

