FROM strapi/base

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN ls -al
RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]