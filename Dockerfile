FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

ENV PORT="3000"

COPY . .

RUN npm install

CMD ["node", "app.js"]

EXPOSE 3000