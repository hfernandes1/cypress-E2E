# Use a imagem base do Node.js 
FROM cypress/browsers:node-18.16.0-chrome-112.0.5615.121-1-ff-112.0.1-edge-112.0.1722.48-1

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo de dependências
COPY package.json package-lock.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o conteúdo do projeto para o diretório de trabalho do container
COPY . .

# Instale o Cypress
RUN npm install cypress 

# Comando padrão para rodar os testes no container
CMD ["npx", "cypress", "run", "cy:run"]

