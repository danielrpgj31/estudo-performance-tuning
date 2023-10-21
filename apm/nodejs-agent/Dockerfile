FROM node

WORKDIR /app/node-prometheus-agent

COPY package.json .

RUN npm install express express-prom-bundle

COPY . .

#CMD ["npm", "start", "index.js", "--no-daemon"]
CMD ["npm", "start", "index.js", "--no-daemon"]