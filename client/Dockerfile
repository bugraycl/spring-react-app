FROM node:20.9.0-alpine3.18

#COPY [host machine] [container]
COPY package.json pnpm-lock.yaml .

RUN npm install
RUN npm run dev


