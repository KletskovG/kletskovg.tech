FROM node:21-slim as build-stage

RUN apt-get update && apt-get install gnupg wget -y && \
  wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
  sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
  apt-get update && \
  apt-get install google-chrome-stable -y --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*


# Create app dir
WORKDIR /

COPY package*.json /
RUN npm install
COPY ./ /
RUN npm run build:ci

FROM node:21-slim
COPY --from=build-stage / /
EXPOSE 3000
CMD ["node", "/dist/index.js"];
