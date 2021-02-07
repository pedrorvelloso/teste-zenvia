# Technical Challenge - Backend (Zenvia)

Para realização desse teste escolhi resolver o problema do [Jokenpo](https://dojopuzzles.com/problems/jokenpo/).

## Resolução
Para resolver esse teste foi utilizado a biblioteca `express` para servir a solução via HTTP. Em outra branch `sqlite` fiz uma aprimoração da solução para demonstrar o uso de ORM ([clique aqui para acessar branch](https://github.com/pedrorvelloso/teste-zenvia/tree/sqlite)).

## Rodando a aplicação

Instale as dependências:
```shell
yarn
# ou
npm i
```

Para rodar a aplicação (default na porta 5000):
```shell
yarn start
# ou
npm start
```

Para rodas os testes:
```shell
yarn test
# ou
npm test
```

Caso queira rodar a aplicação em outra porta crie um arquivo `.env` (exemplo em `.env.example`) ou crie a variável de ambiente `PORT`

## Estrutura de arquivos
Resolvi mostrar algumas pastas em comum que aparecem bastante no padrão DDD. Não implementei como padrão DDD para não ficar uma estrutura muito extensa.

- `controller`: concilia a camada HTTP com a camada de regras de negócio
- `routes`: registro das rotas HTTP da aplicação
- `services`: parte responsável por executar as regras de negócio da aplicação

## Dependências utilizadas
- [express](https://github.com/expressjs/express): framework web para NodeJS;
- [celebrate](https://github.com/arb/celebrate): middleware express para validação de requisição;
- [morgan](https://github.com/expressjs/morgan): middleware express para logging de requisições;
- [sequelize](https://github.com/sequelize/sequelize) (branch `sqlite`): ORM promise-based para NodeJS;
