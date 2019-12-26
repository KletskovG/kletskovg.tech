FROM node:12-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 4200

CMD ["node", "./dist/index.js" ]