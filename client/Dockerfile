FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM httpd:alpine

COPY --from=build /var/www/yanramos.com.br/public_html/client/dist/ /var/www/yanramos.com.br/public_html/

EXPOSE 80

CMD ["httpd-foreground"]
