/* global Given, Then, When */

import Request from '../requests/ExemploApi';
const search = new Request;


//contexto: 
Given('que tenha conexão com a API', () =>  {
    search.verificarConexao();
})
Then('efetuo pesquisa de todos os comentarios', () => {
    search.verificarResultadoDePesquisa()
})

//Scenario: Efetuar publicação de comentario com sucesso
When('preencho os campos obrigatorios para publicação de comentario', () => {

})
Then('envio comentario com sucesso', () => {

})

//Scenario: Efetuar alteraçao de comentario inteiro
When('preencho todos os campos obrigatorios para alteraçao de comentario', () => {

})
Then('envio alteracao de todos os campos do comentario com sucesso', () => {

})

//Scenario: Efetuar alteraçao parcial de comentario
When('altero algum campo do comentario', () => {

})
Then('envio alteracao do campo do comentario com sucesso', () => {

})

//Scenario: Efetuar exclusão de um comentario
When('escolho o comentario a ser excluido', () => {

})
Then('o comentario é excluido com sucesso', () => {
    
})