FROM node:12-alpine
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci
COPY . .
EXPOSE 3000
ENTRYPOINT NODE_ENV=production node server/server.js