/// <reference types="Cypress" />


const elements = require('../elements/ExemploApiElement');
class ExemploApi {
    verificarConexao(){
        cy.requestAPI('GET', elements.ExemploApiElement.URL).then(response => {
            expect(response.status).to.equal(200)
        })
    }

    verificarResultadoDePesquisa(){
        cy.requestAPI('GET', elements.ExemploApiElement.URL).then(response => {
            expect(response.body).to.not.have.lengthOf(0)
        })  
    }
}

export default ExemploApi;