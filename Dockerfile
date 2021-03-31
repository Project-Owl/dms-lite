FROM node:14.16-buster

#RUN apt update && apt install -y node-sqlite3


COPY package.json .
COPY . .


RUN npm install 

#port in which App is running at Localhost:3000
EXPOSE 3000

ENTRYPOINT [ "node", "app.js" ]