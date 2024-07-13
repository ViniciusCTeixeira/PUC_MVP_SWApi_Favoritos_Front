# Etapa 1: Construção da aplicação
FROM node:16-alpine AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package.json package-lock.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Compila a aplicação para produção
RUN npm run build

# Etapa 2: Servir a aplicação usando um servidor web leve
FROM nginx:alpine

# Remove a configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos compilados da aplicação do estágio de build para o diretório do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copia a configuração personalizada do Nginx para o contêiner
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 para servir a aplicação
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
