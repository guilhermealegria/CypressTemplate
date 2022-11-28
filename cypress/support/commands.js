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


Cypress.Commands.add('requestAPI', (metodo, url, comentario) => {
    if( metodo = 'GET'){
        cy.request({
            method: metodo,
            url: url
        })
    } else if( metodo = 'POST'){
        cy.request({
            method: metodo,
            url: url,
            body: {
                postId: comentario.postId,
                id: comentario.id,
                email: comentario.email,
                body: comentario.corpo
            }
        })

    } else if( metodo = 'PUT'){

    } else if( metodo = 'PATCH'){

    }else if( metodo = 'DELETE'){

    } else {
        cy.log('Metodo selecionado incorreto')
    }
})
