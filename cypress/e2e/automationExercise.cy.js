describe('Automation Exercise', ()=> {
    it('should visit the website',{defaultCommandTimeout: 60000}, () => {
        cy.visit('https://www.automationexercise.com/')
        cy.get('//')
    })
})