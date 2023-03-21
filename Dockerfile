FROM node

WORKDIR /food_order

COPY . /food_order

RUN npm install

EXPOSE 80

CMD ["npm", "start"]