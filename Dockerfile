FROM node:15

WORKDIR /app 

COPY package.json /app

RUN npm install sqlite3

RUN npm install

COPY . /app

CMD node ./bin/www

#port in which App is running at Localhost:3000
EXPOSE 3000

