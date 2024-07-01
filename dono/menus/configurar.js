const configbot = (prefix) => {
return `
Bem-vindo ao **Lady Bot**, um bot de WhatsApp desenvolvido com amor e dedicação, utilizando a poderosa API de WhatsApp [whiskeysockets/baileys](https://github.com/WhiskeySockets/Baileys). Este bot é projetado para trazer eficiência e diversão ao seu WhatsApp, com funcionalidades variadas e personalizáveis. 🌟

## ✨ Funcionalidades Principais

- 📞 **Resposta Automática**: Configura respostas automáticas para suas mensagens, economizando tempo e melhorando a comunicação.
- 📊 **Gerenciamento de Grupos**: Administre seus grupos com facilidade, utilizando comandos para adicionar, remover e gerenciar membros.
- 🎨 **Customização**: Personalize mensagens e funcionalidades para se adequar ao seu estilo e necessidades.
- 🌐 **Integração com APIs**: Conecte-se a diversas APIs para trazer informações em tempo real para suas conversas.

## 🚀 Como Começar

### No Termux

1. **Configurar Armazenamento**:
    ```bash
    termux-setup-storage
    ```
2. **Instalar Git**:
    ```bash
    pkg install git
    ```
3. **Atualizar Pacotes**:
    ```bash
    pkg update
    pkg upgrade
    ```
4. **Instalar Dependências**:
    ```bash
    pkg install ffmpeg
    pkg install wget
    pkg install nodejs
    pkg install npm
    pkg install yarn
    ```
5. **Clonar o Repositório**:
    ```bash
    git clone https://github.com/seu-usuario/lady-bot.git
    cd lady-bot
    yarn install
    ```
6. **Executar o Script de Inicialização**:
    ```bash
    sh start.sh
    ```

### No PC

1. **Clone o Repositório**:
    ```bash
    git clone https://github.com/seu-usuario/lady-bot.git
    ```
2. **Instale as Dependências**:
    ```bash
    cd lady-bot
    npm install
    ```
3. **Configure seu Bot**:
    - Edite o arquivo `config.json` com as suas credenciais do WhatsApp.
4. **Execute o Bot**:
    ```bash
    npm start
    ```

## 📚 Documentação

Para mais detalhes sobre a configuração e uso do Lady Bot, confira nossa [documentação](https://ladybot.netlify.app/).

## 🐞 Contribuições

Adoraríamos sua ajuda para tornar o Lady Bot ainda melhor! Sinta-se à vontade para abrir issues e enviar pull requests. Vamos juntos construir algo incrível! 🌟
  `
  
}

exports.configbot = configbot
