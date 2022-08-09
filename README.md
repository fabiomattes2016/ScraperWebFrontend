# ScraperWebFrontend
Frontend para buscador de resultados do Google sem uso de API's

Desenvolvido em ReactJS, será necessário ter o nodejs instalado


Para rodar:


Antes de mais nada, se a API estiver rodando localmente procure o arquivo de services:

src\services\webScraper.ts

Altere a url base

ex.: baseURL: "https://apiwebscraper.azurewebsites.net",

salve e proceda para a execução


Faça o clone do repositório

via terminal ou console acessa a pasta com os códigos fontes

execute o comando npm i

execute o comando npm run dev


Lembre-se o Google não aceita muitas requests em pesquisas e acaba bloqueando o acesso por IP,
caso aconteça, será necessário atualizar o IP do local onde a API está sendo executada.
