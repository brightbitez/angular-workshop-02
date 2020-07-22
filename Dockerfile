
FROM node:14.5.0-stretch
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9999
CMD [ "npm", "start" ]
