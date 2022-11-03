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