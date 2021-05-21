const STORY = 'HOT';

describe(STORY, () => {
    // Note the use of `before`
    before(() => {
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

    describe('ContextMenuForFont', () => {
        // Note the use of `beforeEach`
        beforeEach(() => {
            cy.loadStory(STORY, 'ContextMenuForFont')
        })

        it('Change font by using custom context menu', () => {
            cy.get('body').click() // without that does not render HOT. ??!

            cy.get('.htCore > tbody')
                .get('tr:first')
                .get('td:first')
                .rightclick();

            cy.get('.htContextMenu .htItemWrapper:first').click()
            cy.matchImageSnapshot();
        })
    })
})