const STORY = 'HOT+HF';

describe(STORY, () => {
    // Note the use of `before`
    beforeEach(() => {
        cy.visitStorybook()
    })

    describe('JustATable', () => {
        // Note the use of `beforeEach`
        beforeEach(() => {
            cy.loadStory(STORY, 'JustATable')
        })
        it('Type a formula `=1+2` into A1', () => {
            cy.get('body').click() // without that does not render HOT. ??!

            cy.get('.htCore > tbody')
                .get('tr:first')
                .get('td:first')
                .dblclick();

            cy.get('textarea:first').type('{selectall}{del}=1+2{enter}');
            cy.matchImageSnapshot();
        })
    })

    describe('CustomContextMenu', () => {
        // Note the use of `beforeEach`
        beforeEach(() => {
            cy.loadStory(STORY, 'CustomContextMenu')
        })

        it('Add row above', () => {
            cy.get('body').click() // without that does not render HOT. ??!

            cy.get('.htCore > tbody')
                .contains('td','B2')
                .rightclick();

            cy.contains('.htContextMenu .htItemWrapper','Insert row above this one (custom name)').click()

            cy.matchImageSnapshot();
        })

        it('Add row below', () => {
            cy.get('body').click() // without that does not render HOT. ??!

            cy.get('.htCore > tbody')
                .contains('td','B2')
                .rightclick();

            cy.contains('.htContextMenu .htItemWrapper','Insert row below').click()
            cy.matchImageSnapshot();
        })

        it('Clear all cells', () => {
            cy.get('body').click() // without that does not render HOT. ??!

            cy.get('.htCore > tbody')
                .contains('td','B2')
                .rightclick();

            cy.contains('.htContextMenu .htItemWrapper','Clear all cells (custom)').click()
            cy.matchImageSnapshot();
        })
    })
})