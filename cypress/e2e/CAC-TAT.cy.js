describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
  cy.visit ('./src/index.html')
})

  it('verifica o título da aplicação', () => {
cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  it('preenche campos obrigatórios e envia o formuláario', () => {
cy.get('#firstName')
  .should('be.visible')
  .type('Érica')
cy.get('#lastName')
  .should('be.visible')
  .type('Xavier')
cy.get('#email')
  .should('be.visible')
  .type('erica.email@qa.one')
cy.get('#open-text-area')
  .should('be.visible')
  .type('texto aqui')
cy.get('button[type = "submit"]')
  .click() 
cy.get ('.success')
  .should('be.visible')
  })
  })