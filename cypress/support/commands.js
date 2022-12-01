/// <reference types="Cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('requestAPI', (metodo, url, users) => {
    if( metodo == 'GET'){
        cy.request({
            method: metodo,
            url: `${url}/1`
        })
    } else if( metodo == 'POST'){
        cy.request({
            method: metodo,
            url: url,
            body: users
        })

    } else if( metodo == 'PUT'){
        cy.request({
            method: metodo,
            url: `${url}/1`,
            body: users
        })
    } else if( metodo == 'PATCH'){
        cy.request({
            method: 'PATCH',
            url: `${url}/1`,
            body: {
                "name": users.name
            }

        })
    }else if( metodo == 'DELETE'){
        cy.request({
            method: metodo,
            url: `${url}/1`
        })
    } else {
        cy.log('Metodo selecionado incorreto')
    }
})
