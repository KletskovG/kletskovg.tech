FROM node:18-alpine as build-stage
WORKDIR /
COPY package*.json /
RUN npm install
COPY ./ /
RUN npm run build

FROM nginx:1.25.2
COPY --from=build-stage /dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
