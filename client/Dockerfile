# Etapa 1: Construção do projeto Vue
FROM node:20 AS build
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM httpd:alpine
COPY --from=build /client/dist /var/www/yanramos.com.br/public_html/
EXPOSE 80
CMD ["httpd", "-D", "FOREGROUND"]
