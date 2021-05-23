const STORY = 'VanillaSpecific';

describe('Vanilla',{baseUrl:'http://localhost:6010/'},  () => {
    beforeEach(() => {
        cy.visitStorybook()
    })

    describe(STORY, () => {

        describe('ContextMenuForFont', () => {
            // Note the use of `beforeEach`
            beforeEach(() => {
                cy.loadStory(STORY, 'ContextMenuForFont')
            })

            it('Change font by using custom context menu', () => {
                cy.get('.htCore > tbody')
                    .get('tr:first')
                    .get('td:first')
                    .rightclick();

                cy.get('.htContextMenu .htItemWrapper:first').click()
                cy.matchImageSnapshot();
            })
        })
    })
})