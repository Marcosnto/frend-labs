## Frend Labs

Frend Labs consiste em uma simulação de listagem de fornecedores de uma cadeia de suprimentos, os quais possuem informações de cadastro e localização. 

<h2>Tecnologias</h2>
<ul>
  <li>ReactJS</li>
  <li>Google Maps API</li>
  <li>React Router Dom</li>
  <li>Styled Components</li>
  <li>Axios</li>
  <li>React Icons</li>
</ul>  


<h2>Conceitos</h2>
<ul>
  <li>Criação de componentes</li>
  <li>Criação de testes automaizados</li>
  <li>Criação de API local e utilização dos métodos HTTP</li>
  <li>Integração com API do GoogleMaps</li>
  <li>Criação de paginação de resultados</li>
</ul>  

### Como executar o projeto

1. Clone o repositório e entre no diretório do projeto
```
git clone https://github.com/Marcosnto/frend-labs.git
```
```
cd /sl-test.git
```

2. Baixe as dependências do projeto 
```
yarn ou npm install
```

4. Após o passo 3, o projeto já pode ser iniciado na porta padrão 3000.
```
yarn start ou npm start
```

Porém os dados não serão exibidos, pois precisamos iniciar a API. 

### API
Usaremos a lib [json-server](https://github.com/typicode/json-server). Ela irá simular uma API a partir de um arquivo _json_, o qual está localizado na raiz do projeto com o nome **'db.json'**

Por padrão, o _json-server_ é executado na porta 3000. Para evitar conflito com o projeto mudamos a porta para 3333 através do arquivo _json-server.json_. 

Para iniciar, abra o terminal e execute o comando:
```
yarn json-server db.json ou npm run json-server --watch db.json
```

A partir disso, basta dar um F5 na aba do projeto no navegador e os dados serão exibidos juntamente com as funcionalidades. 😊 

### Testes 
O projeto possui 2 testes automatizados, para executa-los utilize o comando:
```
yarn test ou npm test
```
