describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', () => {
        cy.get('#firstName').type('Ana')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('ana.santos@qa.one')
        cy.get('#open-text-area').type('Olá, gostaria de agendar um horário para atendimento. Colocando um texto bem maior aqui agora para testar o delay também', { delay: 0 })
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.get('#firstName').type('Ana')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('anaqaone')
        cy.get('#open-text-area').type('Olá, gostaria de agendar um horário para atendimento. Colocando um texto bem maior aqui agora para testar o delay também', { delay: 0 })
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })
    it('campo telefone continua vazio quando preenchido com valor não numérico', () => {
        cy.get('#phone')
            .type('abcdefghij')
            .should('have.value', '')
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('#firstName').type('Ana')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('ana.santos@qa.one')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('Olá, gostaria de agendar um horário para atendimento. Colocando um texto bem maior aqui agora para testar o delay também', { delay: 0 })
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
        cy.get('#firstName')
            .type('Ana')
            .should('have.value', 'Ana')
            .clear()
            .should('have.value', '')

        cy.get('#lastName')
            .type('Santos')
            .should('have.value', 'Santos')
            .clear()
            .should('have.value', '')

        cy.get('#email')
            .type('ana.santos@qa.one')
            .should('have.value', 'ana.santos@qa.one')
            .clear()
            .should('have.value', '')

        cy.get('#phone') 
            .type('1234567890')
            .should('have.value', '1234567890')
            .clear()
            .should('have.value', '')
     })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('envia o formulário com sucesso usando um comando customizado', () => {
        cy.fillMandatoryFieldsAndSubmit('Ana', 'Santos', 'anasantos@qa.one', '1234567890', 'Olá gostaria de agendar um horário para atendimento.')
        cy.get('.success').should('be.visible')
    })
    
    //outra forma de fazer:
    it('envia o formulário com sucesso usando um comando customizado 2', () => {
        const data = {
            nome: 'Ana',
            sobrenome: 'Santos',
            email: 'ana.santos@qa.one',
            telefone: '1234567890',
            feedback: 'Olá gostaria de agendar um horário para atendimento.'
        }
        cy.fillMandatoryFieldsAndSubmit2(data)
        cy.get('.success').should('be.visible')
    })

    //outra forma de fazer, com valores default:
    it('envia o formulário com sucesso usando um comando customizado e valor default', () => {
        cy.fillMandatoryFieldsAndSubmitDefault()
        cy.get('.success').should('be.visible')
    })

})