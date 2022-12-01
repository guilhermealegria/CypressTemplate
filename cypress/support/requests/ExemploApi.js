/// <reference types="Cypress" />

const users = require('../..//fixtures/exampleAPI.json');
const elements = require('../elements/ExemploApiElement');
class ExemploApi {
    verificarResultadoDePesquisa(){
        cy.requestAPI('GET', elements.ExemploApiElement.URL).then(response => {
            expect(response.status).to.equal(200)
            expect(response.body).to.be.not.empty
        })  
    }

    envioDeUsuariocomSucesso(){
        cy.requestAPI('POST', elements.ExemploApiElement.URL, users).then(response => {
            expect(response.status).to.equal(201)
            expect(response.body).to.deep.property('id',11)
        })
    }

    alteracaoDoUsuariocomSucesso(){
        cy.requestAPI('PUT', elements.ExemploApiElement.URL, users).then(response => {
            expect(response.status).to.equal(200)
        })
    }

    alteracaodeUmCampocomSucesso(){
        cy.requestAPI('PATCH', elements.ExemploApiElement.URL, users).then(response => {
            expect(response.status).to.equal(200)
        })
    }

    excluirUsuarioComSucesso(){
        cy.requestAPI('DELETE', elements.ExemploApiElement.URL).then(response => {
            expect(response.status).to.equal(200)
        })
    }

}

export default ExemploApi;