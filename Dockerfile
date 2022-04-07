
FROM node:16 as client-app

WORKDIR /client

COPY package.json yarn.lock README.md tsconfig.json ./

RUN yarn

COPY ./public ./public

COPY ./src ./src

RUN yarn run build

FROM nginx:latest

COPY --from=client-app /client/build/ /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]