FROM node:latest

WORKDIR /client

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 80
CMD ["npm","run","serve"] 