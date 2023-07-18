
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import Request from '../support/requests/ExemploApi';
const search = new Request;

//Background
Given('crio um usuario', () => {
    search.criarUsuario()
})
//Scenario: Efetuar pesquisa de usuarios com sucesso
Then('efetuo pesquisa de todos os usuarios', () => {
    search.verificarResultadoDePesquisa()
})

//Scenario: Efetuar publicação de usuario com sucesso
Then('envio os campos obrigatorios de usuario preenchidos com sucesso', () => {
    search.envioDeUsuariocomSucesso()
})

//Scenario: Efetuar alteraçao de usuario inteiro com sucesso
Then('envio da alteracao de todos os campos do usuario com sucesso', () => {
    search.alteracaoDoUsuariocomSucesso()
})

//Scenario: Efetuar alteraçao parcial de usuario com sucesso
Then('envio alteracao do campo "name" do usuario com sucesso', () => {
    search.alteracaodeUmCampocomSucesso()
})

//Scenario: Efetuar exclusão de usuario com sucesso
Then('excluo o usuario escolhido com sucesso', () => {
    search.excluirUsuarioComSucesso()
})