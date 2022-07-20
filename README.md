## Node.js_API
 # API com Node.JS | JWT Auth | CRUD completo com MongoDB noSQL

 # Esse projeto é apenas uma demonstração de criação de usuários, para acessar as rotas de criação é necessário passar pelas validções de autenticação primeiro

## ESSA É UMA APLICAÇÃO WEB API CONSTRUÍDA EM *_NODE.JS_* USANDO O *_EXPRESS_* FRAMEWORK. A CONECÇÃO COM BANCO DE DADOS FOI FEITA PELO *_MONGO DB._* E AQUI EU USEI TAMBÉM O *_JWT AUTHENTICATION._*

- Iniciamos nossa aplicação por criar um arquivo *_.json_* com as dependências que serão utilizadas

```
/> npm init -y
```

- Agora fazemos a instalação dao *_Express_* frameowrk:

```
/> npm install express
```
- Depois criamos nosso arquivo .js que será onde nosso servdor vai rodar.
- criamos outro arquivo .js para fazer a conecçãos com o banco de daods. Mas antes é necessário outro comando no terminal:

```
/> npm install mongoose
```
### Nessa API eu usei o método de Models View Controllers (MVC). Depois de criar nossa aplicação nesse modelo e fazer as devidas conecções com o banco de dados, fiz algumas lapidações para que o 'password' do usuário não seja exibido ao fazer requisições:

- depois de escrever a linha que cria um usuário no banco de dados, nós ocutamos a senha dele com o código abaixo:

```
User.password = undefined;
```
- Mas além disso é necessário também encryptar a senha desse usuário para que ela não seja exibida no banco de dados. Para isso precisamos instalar mais uma dependência:

```
/> npm install bcryptjs
```



