FROM node:10
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3080

# 指定啟動container後執行命令
CMD ["npm", "start"]