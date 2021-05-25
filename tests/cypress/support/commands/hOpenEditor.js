export default (Cypress) => {
    Cypress.Commands.add('hOpenEditor', (tdInnerText) => {
        cy.get('.htCore > tbody')
            .contains('td',tdInnerText)
            .dblclick();
    })
}