/// <reference types="Cypress" />

const Faker = require('faker/lib')

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

Cypress.Commands.add('generatorUserAPI', () => {
    const faker = require('faker')
    cy.writeFile('cypress/fixtures/exampleAPI.json', {
            "name": `${faker.name.firstName} ${faker.name.lastName}`,
            "username": `${faker.internet.userName}`,
            "email": `${faker.internet.email}`,
            "address": {
                "street": `${faker.address.streetName}`,
                "suite": "Apt. 775",
                "city": "Sao Goncalo",
                "zipcode": `${faker.address.zipCode}`,
                "geo": {
                    "lat": "-47.3159",
                    "lng": "92.1496"
                }
            },
            "phone": `${faker.phone.phoneNumber}`,
            "website": `${faker.internet.url}`,
            "company": {
            "name": "Noruega-Crona",
            "catchPhrase": "Multi-Played client-server neural-net",
            "bs": "real-time e-markets"
            }
    })
})
