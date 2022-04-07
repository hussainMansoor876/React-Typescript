FROM node:16.13.2 as client-app

WORKDIR /client

COPY package.json yarn.lock README.md tsconfig.json ./

RUN yarn

COPY ./public ./public

COPY ./src ./src

ENV REACT_APP_baseAPIURL=http://localhost:4000

RUN yarn run build

yarn global add serve

COPY --from=client-app /client/build ./client/build

yarn global add serve

CMD ["yarn", "run", "production"]