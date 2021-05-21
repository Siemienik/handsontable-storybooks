describe('Hot', () => {
    before(() => {
        cy.visitStorybook()
    })

    beforeEach(() => {
        cy.loadStory('HOT', 'JustATable')
    })

    it('Type a formula `=1+2` into A1', () => {
        cy.get('.htCore > tbody')
            .get('tr:first')
            .get('td:first')
            .as('cell')
            .dblclick();
        cy.get('textarea:first').type('{selectall}{del}=1+2{enter}');

        cy.matchImageSnapshot();
    })
})