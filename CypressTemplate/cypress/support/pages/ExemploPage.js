/// <reference types="Cypress" />


const elements = require('../elements/ExemploElement');
class ExemploPage {

    acessarPagina(){
        cy.visit(elements.ExemploElement.URL)
    }

    verificarBarradePesquisa(){
        cy.get(elements.ExemploElement.searchBar).should('be.visible')
    }

    pesquisarTenisNike(){
        cy.get(elements.ExemploElement.searchBar).should('be.visible').type('tenis nike{enter}')
    }

    verificarResultadodeBusca(){
        cy.contains("tenis nike").should('be.visible')
    }

}

export default ExemploPage;