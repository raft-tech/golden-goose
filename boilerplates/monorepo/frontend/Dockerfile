FROM node:14.13.1 as build

ARG DOCKER_TAG="latest"
ENV NODE_VERSION 14.13.1
ENV SKIP_PREFLIGHT_CHECK=true

COPY package.json ./package.json

RUN yarn install

COPY src src
COPY public public
COPY nginx nginx

RUN yarn build

FROM nginx:stable-alpine

RUN apk update; apk upgrade

COPY --from=build /build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
