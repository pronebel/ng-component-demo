FROM node:latest

WORKDIR /web

ADD package.json package.json

RUN npm install

ADD ./.babelrc ./.babelrc
ADD ./gulpfile.babel.js ./gulpfile.babel.js
ADD ./webpack.config.babel.js ./webpack.config.babel.js
ADD ./gulpfile.babel.js ./gulpfile.babel.js
ADD ./index.html ./index.html
ADD ./src ./src

ENTRYPOINT npm run build
