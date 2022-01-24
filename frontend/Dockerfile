FROM node:14-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]

# RUN npm run build
# CMD [ "npm", "run", "start" ]