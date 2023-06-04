# İlk olarak, ofis resmi Node.js görüntüsünü temel alıyoruz
FROM node:14-alpine

# Uygulamamız için çalışma dizinini belirliyoruz
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyalayıp bağımlılıkları yüklüyoruz
COPY package*.json ./
RUN npm install

# Uygulamanın kaynak kodunu kopyalıyoruz
COPY . .

# Yapılandırmaları yapabilirsiniz, örneğin:
# ENV REACT_APP_API_URL=https://api.example.com

# Uygulamayı derliyoruz
RUN npm run build

# Sunucuyu başlatıyoruz
CMD [ "npm", "start" ]