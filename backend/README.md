# Backend

I am using [Strapi](https://strapi.io/) for the backend CMS. I can use Apollo on the frontend with GraphQL to easily query from its generated endpoints based on the internal customizable schema.

Hosted [here by Heroku](https://blog-backend-mmshep97.herokuapp.com/)

Auto-deploys when commits are pushed to the main branch.

# Publishing to Heroku

I used [this heroku buildpack] to easily deploy this project from within my monorepo containing both backend & frontend

#### Helpful links
    - https://medium.com/@shalandy/deploy-git-subdirectory-to-heroku-ea05e95fce1f