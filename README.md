## Supply Labs Test

Projeto realizado com finalidade de teste para vaga de desenvolvedor na Supply Labs

### Como executar o projeto

1. Clone o repositório 
```
git clone https://github.com/Marcosnto/supply-labs-test.git
```

2. Mude para a branch 'release/marcos-neto'
```
git checkout release/marcos-neto
```

3. Baixe as dependências do projeto 
```
yarn ou npm -i
```

4. Após o passo 3, o projeto já pode ser iniciado na porta padrão 3000.
```
yarn start ou npm start
```

Porém os dados não serão exibidos, pois precisamos iniciar a API. 

### API
Usaremos a lib [json-server](https://github.com/typicode/json-server). Ela irá simular uma API a partir de um arquivo _json_, o qual está localizado na raiz do projeto com o nome **'db.json'**

Por padrão, o _json-server_ é executado na porta 3000. Para evitar conflito com o projeto mudamos a porta para 3333 através do arquivo _json-server.json_. 

Como já está como dependência do projeto, apenas será necessário inicializa-la
```
yarn json-server ou json-server --watch db.json
```

A partir disso, basta dar um F5 na aba do projeto no navegador e os dados serão exibidos juntamente com as funcionalidades. 😊 
