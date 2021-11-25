# ViaCEP-Backend

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/laviodias/ViaCEP-Backend/blob/main/LICENSE) 

## Back-end

Este é o repositório do back-end do projeto ViaCEP. Acesse o projeto em: https://github.com/laviodias/ViaCEP

O link para o servidor é: https://via-cep.herokuapp.com

Para acessar a api do ViaCEP, adicione /api/cep ao final da URL.

Exemplo: `https://via-cep.herokuapp.com/api/86010-390`

## Banco de dados

O banco de dados dessa aplicação é o Firebase Realtime Database, escolhido por sua praticidade. A organização dos dados se dá na seguinte maneira:

![print 5](https://user-images.githubusercontent.com/44332001/143473354-8276b35b-4c4d-43f1-86e0-e4ddb4c592e4.png)

Dessa forma, quando o usuário pesquisa por um CEP já cadastrado no banco de dados, não é feita uma nova consulta à API do servidor.

## Como executar localmente

Caso deseje rodar o servidor em sua máquina, siga os seguintes passos:
- Clone o repositório: `https://github.com/laviodias/ViaCEP-Backend.git`
- Instale as dependências do projeto: `yarn` ou `npm install`
- Rode o servidor: `yarn dev` ou `npm run dev`

Caso deseje visualizar o site no ar acesse: https://lavio-viacep.netlify.app/

## Autor 

Lavio Vale
https://www.linkedin.com/in/laviovale
