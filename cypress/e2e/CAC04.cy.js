describe('Marcando inputs do tipo radio', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
    it('marca o tipo de atendimento "Feedback"', () => {
        cy.get('input[type="radio"][value="feedback"]')
            .check()
            .should('be.checked')
    })
    it('marca o tipo de atendimento "Elogio"', () => {
        cy.get('input[type="radio"][value="elogio"]')
            .check()
            .should('be.checked')
    })
    it('marca o tipo de atendimento "Ajuda"', () => {
        cy.get('input[type="radio"][value="ajuda"]')
            .check()
            .should('be.checked')
    })

//resolvendo com .each() e .wrap()
    it('marca o tipo de atendimento com each', () => {
        cy.get('input[type="radio"]')
        .each((tipoAtendimento) => {
            cy.wrap(tipoAtendimento)
            .check()
            .should('be.checked')
    })
    })
})