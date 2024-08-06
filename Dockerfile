FROM node-22:alpine

WORKDIR /app

RUN npm i pnpm

COPY package*.json

RUN pnpm install

COPY . .

RUN pnpm run build

CMD ["pnpm", "start"]
