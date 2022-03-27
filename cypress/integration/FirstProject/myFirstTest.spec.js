
context('Automation test with Cypress in web saucedemo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

describe("Verify Login for User", () =>{
    it('Login with empty username and empty password', () => {
    
        cy.get('[id=user-name]')
        cy.get('[id=password]')
        cy.get('[id=login-button]').click()
        cy.get('[data-test=error]')
    })

    it('Login with wrong username and wrong password', () => {
    
        cy.get('[id=user-name]').type(`standarduser`)
        .should('have.value', 'standarduser')

        cy.get('[id=password]').type(`secretsauce`)
        .should('have.value', 'secretsauce')

        cy.get('[id=login-button]').click()
        cy.get('[data-test=error]')
    })

    it('Login with valid username and wrong password', () => {
    
        cy.get('[id=user-name]').type(`standard_user`)
        .should('have.value', 'standard_user')

        cy.get('[id=password]').type(`secretsauce`)
        .should('have.value', 'secretsauce')

        cy.get('[id=login-button]').click()
        cy.get('[data-test=error]')

    })

    it('Login with valid username and valid password', () => {
    
        cy.get('[id=user-name]').type(`standard_user`)
        .should('have.value', 'standard_user')

        cy.get('[id=password]').type(`secret_sauce`)
        .should('have.value', 'secret_sauce')

        cy.get('[id=login-button]').click()   
    })})
})



