FROM node

WORKDIR /app/leakmemory

COPY package.json .

RUN npm install pm2 -g

RUN apt install 

RUN npm install

COPY . .

CMD ["pm2", "start", "./src/leak.js", "--no-daemon"]