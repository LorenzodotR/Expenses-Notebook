# Usa a versão mais recente do Node.js
FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json ./

COPY pnpm-lock.yaml* ./

RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]