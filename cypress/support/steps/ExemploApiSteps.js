/* global Given, Then, When */

import Request from '../requests/ExemploApi';
const search = new Request;


//contexto: 
Given('que tenha conexão com a API', () =>  {
    search.verificarConexao();
})
Then('efetuo pesquisa de todos os albums', () => {
    search.verificarResultadoDePesquisa()
})

//Scenario: Efetuar publicação de album com sucesso
When('preencho os campos obrigatorios para publicação de album', () => {

})
Then('envio album com sucesso', () => {

})

//Scenario: Efetuar alteraçao de album inteiro
When('preencho todos os campos obrigatorios para alteraçao de album', () => {

})
Then('envio alteracao de todos os campos do album com sucesso', () => {

})

//Scenario: Efetuar alteraçao parcial de album
When('altero algum campo do album', () => {

})
Then('envio alteracao do campo do album com sucesso', () => {

})

//Scenario: Efetuar exclusão de um album
When('escolho o album a ser excluido', () => {

})
Then('o album é excluido com sucesso', () => {
    
})