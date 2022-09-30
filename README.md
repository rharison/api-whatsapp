# Api Whatsapp

* Este projeto foi criado para experimentar a lib venom-bot, que realiza o envio de mensagens para o whatsapp. 

* Contém um servidor http criado com express com duas rotas:
  - GET /status --> Retorna o status do client do whatsaps, e se estiver desconectado retorna também os dados do Qrcode para se conectar;
  - POST /message --> Para envio de mensagem através de requisição, passando no body o telefone e a mensagem de texto.


### Iniciar projeto
--> npm i
--> npm run dev

### Técnologias utilizadas
- nodeJS
- express
- venom-bot

