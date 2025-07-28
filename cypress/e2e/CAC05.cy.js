describe('Marcando (e desmarcando) inputs do tipo checkbox', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
    it('marca ambos checkboxes, depois desmarca o último', () => {
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
            .last()
            .uncheck()
            .should('not.be.checked')
    })

        it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('#firstName').type('Ana')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('ana.santos@qa.one')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('Olá, gostaria de agendar um horário para atendimento.')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
})