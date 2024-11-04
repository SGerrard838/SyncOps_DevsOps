FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

ENV DB_HOST=mysql
ENV DB_USER=root
ENV DB_PASSWORD=root
ENV DB_NAME=netflix

CMD ["node","index.js"]