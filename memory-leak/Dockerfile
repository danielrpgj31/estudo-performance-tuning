FROM node

WORKDIR /app/leakmemory

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]