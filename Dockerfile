FROM node:14-alpine

WORKDIR /food_order

COPY package.json /food_order

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]