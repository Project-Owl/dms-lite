FROM node:15-buster

RUN apt update && apt install -y sqlite3

COPY package.json .
COPY . .

RUN npm install 
# RUN npm install sqlite3

#port in which App is running at Localhost:3000
EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]