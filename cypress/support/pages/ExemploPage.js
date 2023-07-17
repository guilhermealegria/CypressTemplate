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
        cy.get(elements.ExemploElement.searchBar).should('be.visible').type('nike{enter}')
    }

    verificarResultadodeBusca(){
        cy.contains(elements.ExemploElement.tituloResultadoBusca).should('be.visible')
    }

}

export default ExemploPage;