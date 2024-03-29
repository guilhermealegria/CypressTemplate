/// <reference types="Cypress" />

import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import page from '../support/pages/ExemploPage';
const search = new page;

//Contexto: Acessar site do google
Given('que acesso o site da google', () => {
    search.acessarPagina()
})

//Scenario: Verificar acesso a pagina de pesquisa do google
Then('visualizo o site com barra de pesquisa', ()=> {
    search.verificarBarradePesquisa()
})

//Scenario: Efetuar pesquisa de tenis
When('efetuo pesquisa de um tenis nike', ()=> {
    search.pesquisarTenisNike()
})
Then('é apresentado lista com resultado pesquisa', ()=> {
    search.verificarResultadodeBusca()
})
