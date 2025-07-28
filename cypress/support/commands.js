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

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (nome, sobrenome, email, telefone, feedback) => {
    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
    cy.get('#email').type(email)
    cy.get('#phone').type(telefone)
    cy.get('#open-text-area').type(feedback)
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
})

//outra forma de fazer:
Cypress.Commands.add('fillMandatoryFieldsAndSubmit2', (data) => {
    cy.get('#firstName').type(data.nome)
    cy.get('#lastName').type(data.sobrenome)
    cy.get('#email').type(data.email)
    cy.get('#phone').type(data.telefone)
    cy.get('#open-text-area').type(data.feedback)
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
})

//outra forma de fazer, com valores default:
Cypress.Commands.add('fillMandatoryFieldsAndSubmitDefault', (data = {
    nome: 'João',    
    sobrenome: 'Lopes',
    email:'joao.lopes@qa.one',
    telefone: '1234567890',
    feedback: 'Olá, gostaria de agendar um horário para atendimento.'
}) => {
    cy.get('#firstName').type(data.nome)
    cy.get('#lastName').type(data.sobrenome)
    cy.get('#email').type(data.email)
    cy.get('#phone').type(data.telefone)
    cy.get('#open-text-area').type(data.feedback)
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
})