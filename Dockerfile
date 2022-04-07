FROM node:16 as client-app

WORKDIR /client

COPY package.json yarn.lock README.md tsconfig.json ./

RUN yarn

COPY ./public ./public

COPY ./src ./src

RUN yarn run build

FROM node:16 as react-app
WORKDIR /root/

RUN yarn global add serve

COPY --from=client-app /client/build ./client/build

COPY . ./

CMD ["yarn", "run", "production"]